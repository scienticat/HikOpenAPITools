const express = require('express')
const cors = require('cors');
const CryptoJS = require('crypto-js');
const app = express()
const appKey = '********';//AK
const appSecret = '********';//SK


app.use(cors());//解决跨域的问题

function buildSignatureString(method, apipath,) {
    let stringToSign = method.toUpperCase();
    stringToSign += `\n*/*\napplication/json\nx-ca-key:${appKey}\n`//签名拼接字符串，这里只用了Method，Accept，Content-Type，Appkey
    stringToSign += apipath ;//注意：apiPath前面要加/artemis，形如：/artemis/api/resource/v1/unit/getAllTreeCode，这里很坑
    return stringToSign;
  }
  
  // 计算签名
  function calculateSignature(stringToSign) {
    return (CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(stringToSign, appSecret)));

  }
  
  // 发起请求的函数
   function getSign(method, apipath) {
    // 构建签名字符串
    var signatureString = buildSignatureString(method, apipath);
    // 计算签名
    const signature = calculateSignature(signatureString);
    return signature;
  }
  

  app.get('/getsign',function(req,res){
    var resJson={};
    try {
        resJson.code=1;
        resJson.sign=getSign(req.query.method,req.query.apipath);
        resJson.errorMsg="";
        res.send(resJson);
    } catch (error) {
        resJson.code=0;
        resJson.errorMsg=error;
        res.send(resJson);
    }//前端访问/getsign路由，传入两个参数即可
   
  });


  app.listen(3000, () => console.log('Hik SignTool for OpenAPI listening on port 3000!'));