<h1 align="center">海康威视综合安防管理平台API测试工具与签名认证工具 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> hik_sign_tool通过AK，SK生成海康威视OpenAPI访问所需的签名。  
> hik_api_test_tool作为前端调用签名并访问API，查看返回结果


## Usage
### 签名服务 hik_sign_tool

修改app.js中的appKey和secertKey为你自己的AK和SK  
使用PM2守护启动

```sh
npm install -g pm2
pm2 app.js
```

通过前端调用 `http://部署设备IP:3000/getsign?Method=调用方法&apiPath=API路径地址` 来获取签名字符串  
例如：
`http://localhost:3000/getsign?Method=POST&apiPath=/artemis/api/resource/v1/unit/getAllTreeCode`

**注意**：**api地址需要带上/artemis一起签名**  
这是比较坑的一个地方。因为一般集成商给出的文档中，API地址只有/api/resource/v1/unit/getAllTreeCode这一节，但是实际访问要求带上/artemis  

### 接口测试工具 hik_api_test_tool

修改vite.config.js  
/dev-api中的target为调用api的服务器地址
/sign-api中的target为签名服务的服务器地址

```sh
npm run dev
```

/data/apis.ts中包含所有待调试测试的api地址，可自行修改
每次通过输入参数传入的结构体会被自动记录，存储在本地，方便调用

## Author

👤 **huyu**

* Github: [@scienticat](https://github.com/scienticat)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
