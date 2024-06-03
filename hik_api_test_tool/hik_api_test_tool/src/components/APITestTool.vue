<template>
  <div class="api-test-tool">
    <div class="left-column">
      <h1>Hik接口测试工具</h1>
      <h2>By HuYu</h2>
      <div class="form-group">
        <label for="request-method">请求方法:</label>
        <select id="request-method" v-model="requestMethod">
          <option value="POST">POST</option>
          <option value="GET">GET</option>
        </select>
      </div>

      <div class="form-group">
        <label for="api-selection">调用API:</label>
        <select id="api-selection" v-model="selectedApi">
          <option v-for="api in apis" :key="api.path" :value="api.path">
            {{ api.name }}
          </option>
        </select>
      </div>
      <button class="submit-button" @click="sendRequest">发送</button>
    </div>

    <div class="right-column">
      <div class="form-group">
        <label for="input-params">输入参数:</label>
        <textarea
          id="input-params"
          v-model="inputParams"
          placeholder="请输入参数"
          style="width: 500px; height: 300px"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="output-params">输出参数:</label>
        <textarea
          id="output-params"
          v-model="outputParams"
          placeholder="输出结果"
          readonly
          style="width: 500px; height: 300px"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<style scoped>
.api-test-tool {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.left-column,
.right-column {
  flex: 1;
  padding: 20px;
}

.right-column {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

textarea,
input,
select {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  padding: 0.75rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  width: fit-content;
  font-size: 1rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
<script setup>
import axios from "axios";
import { reactive, toRefs, ref, watch, onMounted } from "vue";
import { apisjson } from "@/data/apis.ts";

const requestMethod = ref("POST");
const signServiceUrl = ref("/sign-api");
const selectedApi = ref("");
const serverAddress = ref("/dev-api");
const inputParams = ref('{\n"pageNo": 1,\n"pageSize": 100\n}');
const outputParams = ref("");
const apis = ref(apisjson); // API列表
const apiInputHistory = ref({});

// 在组件挂载时初始化默认参数
onMounted(async () => {
  // 假设apis数组中的每个API对象现在包含一个defaultParams属性
  apis.value.forEach((api) => {
    const defaultParams = getOrSetDefaultParamsForApi(
      api.path,
      api.defaultParams || ""
    ); // 如果没有默认参数，则设置为空字符串或其他默认值
  });
});

// 监听selectedApi变化，加载历史输入参数
watch(
  selectedApi,
  async (newApiPath) => {
    if (localStorage.getItem(`apiInputHistory_${newApiPath}`)) {
      const savedInput = JSON.parse(
        localStorage.getItem(`apiInputHistory_${newApiPath}`)
      );
      inputParams.value = savedInput;
    }
  },
  { immediate: true }
);

// 定义一个函数来设置每个API的默认参数
const setDefaultParamsForApi = (apiPath, defaultParams) => {
  localStorage.setItem(
    `apiInputHistory_${apiPath}`,
    JSON.stringify(defaultParams)
  );
};

// 定义一个函数来获取或设置每个API的默认参数
const getOrSetDefaultParamsForApi = (apiPath, defaultParams) => {
  let savedParams = localStorage.getItem(`apiInputHistory_${apiPath}`);
  if (!savedParams) {
    savedParams = JSON.stringify(defaultParams);
    localStorage.setItem(`apiInputHistory_${apiPath}`, savedParams);
  }
  return JSON.parse(savedParams);
};

async function sendRequest() {
  try {
    // 获取签名
    const signResponse = await axios.get(`${signServiceUrl.value}/getsign`, {
      params: {
        method: requestMethod.value,
        apipath: selectedApi.value,
      },
    });
    const sign = signResponse.data.sign;

    // 构建请求头
    const headers = {
      Accept: "*/*",
      "Content-Type": "application/json",
      "X-Ca-Key": 26315864,
      "X-Ca-Signature": sign,
      "X-Ca-Signature-Headers": "x-ca-key",
    };

    // 发起实际请求
    const apiUrl = serverAddress.value + selectedApi.value;

    const response = await axios.post(apiUrl, inputParams.value, {
      headers: headers,
    });
    localStorage.setItem(
      `apiInputHistory_${selectedApi.value}`,
      JSON.stringify(inputParams.value)
    );
    // 处理响应
    outputParams.value = JSON.stringify(response.data, null, 2);
  } catch (error) {
    console.error("请求失败:", error);
    outputParams.value = `错误: ${error.message}`;
  }
}
</script>
