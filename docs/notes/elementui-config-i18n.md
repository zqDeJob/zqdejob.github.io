​

# elementui 整合国际化

我们在使用 elementui 国际化的时候一般会有 3 个文件，`index.js`, `zh.js`, `en.js`，
其中 index.js 通一处理文件引入和 cookie 获取语言这类逻辑，
而翻译内容则分别存放于 `zh.js` 和 `en.js` 中

例如：

```js
// zh.js

export default {
  common: {
    comfirm: '确定',
    cancel: '取消',
    modify: '编辑',
    operation: '操作',
    save: '保存',
    saveSuccess: '保存成功',
    saveFail: '保存失败',
    open: '开启',
    openSuccess: '开启成功',
    openFail: '开启失败',
  }
}

// en.js

export default {
  common: {
    comfirm: 'OK',
    cancel: 'Cancel',
    modify: 'Edit',
    operation: 'Operate',
    save: 'Save',
    saveSuccess: 'Save successfully!',
    saveFail: 'Save fail!',
    open: 'Open',
    openSuccess: 'Open successfully!',
    openFail: 'Open fail!',
  }
}
```

以上就是我们常用的国际化过程，但是如果国际化内容很多，翻译内容全部存放在 `zh.js` 和 `en.js` 中就会产生一些问题，所以我们就想到将翻译区分开，得到一个公用的翻译内容 和 各页面各自对应的翻译内容

即：

```
├─ lang
│ ├─ zh.js
│ └─ en.js
│ └─ index.js

```

变成

```
├─ lang
│ ├─ acticle
│ │ └─ zh.js
│ │ └─ en.js
│ ├─ video
│ │ └─ zh.js
│ │ └─ en.js
│ ├─ zh.js
│ └─ en.js
│ └─ index.js

```

结构我们确认了，但是就会发现文件引入变得很麻烦

```js
//这里要逐个引入，就很麻烦
import articleEn from './article/en'
import articleZh from './article/zh'

import videoEn from './video/en'
import videoZh from './video/zh'

const messages = {
  en: {
  ...enLocale,
  ...elementEnLocale,
  ...articleEn,
  ...videoEn
  },
  zh: {
  ...zhLocale,
  ...elementZhLocale,
  ...articleZh ,
  ...videoZh
  }
  }
  const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
})
```

所以我们就想到了优化，这里引入一个关键方法  `require.context()`

相关参考资料：

- [vue 基础组件的自动化全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)
- [webpack require.context](https://webpack.docschina.org/guides/dependency-management/#requirecontext)

不懂的可以上网去查看一下

用法：
接受三个参数`（require.context(directory,useSubdirectories,regExp)）`

```js
directory：说明需要检索的目录
useSubdirectories：是否检索子目录
regExp: 匹配文件的正则表达式,一般是文件名
```

返回参数

require.context 返回一个 require 函数，此函数可以接收一个参数

返回的函数：`function webpackContext(req) {return **webpack_require**(webpackContextResolve(req))}`

函数有三个属性：`resolve` 、`keys`、`id`
 - resolve: 是一个函数，他返回的是被解析模块的 id ，接受一个参数 request。

- keys: 也是一个函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成

- id：上下文模块的 id

所以我们就得到了优化方案

```js
const files = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.js$/
)
let zhLang = {}; let enLang = {}
files.keys().forEach(fileName => {
  if (fileName.indexOf('zh') > -1) {
  zhLang = Object.assign(zhLang, files(fileName).default || files(fileName))
  } else if (fileName.indexOf('en') > -1) {
  enLang = Object.assign(enLang, files(fileName).default || files(fileName))
  }
})
const messages = {
  en: {
  ...elementEnLocale,
  ...enLang
  },
  zh: {
  ...elementZhLocale,
  ...zhLang
  }
}
```

以上

​
