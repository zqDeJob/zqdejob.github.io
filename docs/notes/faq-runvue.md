# 生产环境如何调试 VUE 代码？

## 1. 源项目打开 sourceMap

```js
configureWebpack: {
  devtool: 'source-map'
}
```

## 2. 浏览器控制台输入以下代码

```js
function openVueTool(){
    var vue = app.__vue__
    var constructor = vue.__proto__.constructor
    var Vue = constructor;
    while(Vue.super){
        Vue = Vue.super
    }
    Vue.config.devtools = true;
    var hook = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
    hook.emit('init',Vue)
    if(vue.$store){
      var store = vue.$store;
     store._devtoolHook = hook;
     hook.emit('vuex:init', store);
        hook.on('vuex:travel-to-state',function(targetState){
            store.replaceState(targetState);
         });
        store.subscribe(function(mutation, state){
            hook.emit('vuex:mutation', mutation, state);
        });
    }
}
openVueTool();
```

## 3. 重复切换 F12, 直到 vue-dev-tools 工具的标识出现

## 4. 局限性

首先，由于是通过控制台添加方法 openVueTool  的方式打开的 vue-dev-tools ，所以调试页面不能关闭，关闭后就要按照以上步骤再次执行一遍。

## === 补充 ===

现在已经有扩展程序 `vue-force-dev` , 也可以更好的调试
