# linux 离线环境如何安装 node ？

> node 历史版本：https://nodejs.org/en/about/previous-releases

1. 找到并复制 `node-v14.16.0-linux-x64.tar.xz` 到离线环境
2. 进入 root 权限 （su / \*\*\*）
3. 运行以下代码

```js
tar  xf node-v14.16.0-linux-x64.tar.xz -C /usr/local/
cd /usr/local/
mv node-v14.16.0-linux-x64 nodejs
ln -s /usr/local/nodejs/bin/node /usr/local/bin
ln -s /usr/local/nodejs/bin/npm /usr/local/bin
```

# windows 离线环境如何安装 nvm ？

> 参考文档：https://blog.csdn.net/tian330726/article/details/98547702/

## 1. 下载 nvm 安装包

- 地址： https://github.com/coreybutler/nvm-windows/releases
- 选择 `nvm-setup.zip`
- 安装成功后可通过 `nvm -v` 查看版本

## 2. 绑定 nodejs

- 如果之前已经安装过 node，先卸载
- 通过上方 node 历史版本，下载对应 node 压缩包 （注意匹配版本）
- 通过 `which nvm` 找到 nvm 安装位置，并将上方获取到的 node 压缩包 移动到此位置
- 解压 node 压缩包并重命名，命名格式为 v16.20.2 | v18.0.0
- 最后通过 `nvm ls` 查看出 node 版本即说明安装成功
