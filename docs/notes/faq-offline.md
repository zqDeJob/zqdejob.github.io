# 如何在开发环境中添加全局依赖

这里依赖一个包管理工具  `npm-pack-all` （这里不要使用 cnpm 去下载，否则编出来的包在开发环境可能会无法安装）

## 1. 外网环境安装 npm-pack-all

安装工具，`npm install -g npm-pack-all`

安装所需全局依赖，例如 vuese ，`npm install -g @vuese/cli`

## 2. 在 node-modules 中找到需要打离线包的依赖包

`npm root -g` —— 找到默认的全局 npm 位置
eg: `C:\\KSVDUsers\\Users\\ksvd\\AppData\\Roaming\\npm\\node_modules`

```js
cd C/KSVDUsers/Users/ksvd/AppData/Roaming/npm/node_modules
cd @vuese/cli //找到 package.json 所在目录
npm-pack-all
```

以上操作会制作出一个 .tgz 的文件, 例如 vuese.tgz

## 3.部署到开发环境

`npm root -g` 查找全局 npm，并将 vuese.tgz 挪到此处

```js
npm i vuese.tgz
ln -s /home/kylin-ksvd/nodejs/bin/vuese /usr/local/bin/vuese  // 建立软连接
```
