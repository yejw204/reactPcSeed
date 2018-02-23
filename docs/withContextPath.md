
# 项目部署在门户，通过`http://eip.htsc.com.cn/xxx`来访问的一些注意事项

## 用户登录

用户登录校验、超时管理等全部由门户统一处理，这里有一个问题要注意，当用户登录超时时，会返回一段html（包含登录表单），而由我们项目发出的请求预期返回是json格式，这时候在处理返回数据时，js会报错，我们需要捕获这段错误，重新刷新当前页面，触发浏览器跳转，具体修改:


```
// src/app.js

const onError = (e) => {
  const { message: msg } = e;
  // See src/utils/request.js
  if (e.name === 'SyntaxError'
    && (msg.indexOf('<') > -1 || msg.indexOf('JSON') > -1)
  ) {
    window.location.reload();
  } else {
    message.error(msg);
  }
};
```

## 项目打包

因为项目访问地址为`http://eip.htsc.com.cn/xxx`来访问，因此在打包时，需要将各类引用资源（图片、js、css等）等加上`xxx`前缀，这个在`config/index.js`中设置

```
module.exports = {
  build: {
    ...
    assetsPublicPath: '/xxx/',
    ...
  },
  ...
};

```

## 线上部署

运行 `npm run build` 打包，在项目目录下生成`dist`目录，将dist中的内容复制到服务器nginx对应的目录中，
以`/app/www/xxx`为例，nginx配置如下：

```
  ...

  server {
      listen 9084;

      # 动态请求，转发给后端api
      location ^~ /xxx/api/ {
          proxy_pass http://192.168.xx.xx/api/;
      }

      # 静态资源服务，对应打包生成的dist中的文件
      location ^~ /xxx {
          alias /app/www/xxx/;
      }
  }

  ...

```
