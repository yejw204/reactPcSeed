
# React Seed (PC)

基于react技术栈的种子站点, 适用于企业中后台管理系统的快速搭建。

demo(云桌面环境，根据develop分支自动构建): http://168.61.5.200/

## 开发环境

windows下推荐安装终端环境：[cmder.net](http://cmder.net/)

安装nodejs: https://nodejs.org/en/

### 启动项目

进入项目目录,运行

```
# 安装依赖
npm install

# 启动本地开发服务器
npm run dev
```

等待一会儿，系统自动打开浏览器，即可进行开发。

### 项目打包

```
npm run build
```

运行完成后，在项目下生成dist目录，直接将dist目录下内容发布到生产环境下即可（nginx / apache等），人肉、jekins随便。

如果项目部署在门户上(http://eip.htsc.com.cn/xxx)上，[门户部署指南](docs/withContextPath.md)

### 代码检查

```
npm run lint
```

注意：如果在windows下开发，因为windows换行符和*nux系统不一致，可能会导致以下lint错误：

```
157:3    error  Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
```

运行以下命令解决：

```
eslint --fix --ext .js src
```

如果eslint命令找不到，尝试

```
.\node_modules\.bin\eslint.cmd --fix --ext .js src
```

同时，更改编辑器换行符设置: `CRLF -> LF`:

以`sublime`为例，菜单栏 `View` -> `Line Endings` -> `Unix`
 
javascript规范主要参考[airbnb规范](https://github.com/airbnb/javascript)

### 前后端分离 MOCKUP

mockup相关配置在`config/index.js`中:

```
// 后端服务器地址前缀，在`config.dev.mock`为`false`的情况下，
// 以此前缀开头的请求全部转发至指定服务器`targetUrl`
const apiPrefix = '/api';
// 后端服务器, 域名或者都可以
// eg: http://192.168.71.26:9082
const targetUrl = 'http://45.32.79.142:3000';

// mock开关, true表示不访问远程服务器，使用本地mockup目录数据进行开发
config.dev.mock: false
  
```

### git commit hook

git commit时会运行lint进行代码静态检查，代码检查通过才可以正常commit

## 目录说明

[目录说明](docs/catelog.md)

## 开发步骤

[开发步骤](docs/dev.md)

## 项目部署

[项目部署](docs/online.md)

## 学习资源

[学习资源](docs/study.md)


