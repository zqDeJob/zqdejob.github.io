# 自定义设计

## 表格深色背景

```css
.el-table{
    border: 1px solid #172147;
    background-color: #090f26;
}
.el-table::before{
    background-color: rgba(67, 154, 255, 0.15);
}
.el-table th,
.el-table td{
   background-color: #070c1f;color: #fff;border-color: rgba(67,154,255,.06) !important;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: rgb(9, 21, 46) !important;
}
.el-table .cell{
    font-weight: 400;
}
```

## elementui 消息重复提示

utils 文件中新建 message.js

```js
// message.js
import { Message } from 'element-ui'

// 为了实现Class的私有属性
const showMessage = Symbol('showMessage')
/**
 *  重写ElementUI的Message
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 */
let messageInstance = null
class ReMessage {
  success(options, single = true) {
    this[showMessage]('success', options, single)
  }
  warning(options, single = true) {
    this[showMessage]('warning', options, single)
  }
  info(options, single = true) {
    this[showMessage]('info', options, single)
  }
  error(options, single = true) {
    this[showMessage]('error', options, single)
  }
  [showMessage](type, options, single) {
    if (messageInstance && single) {
      messageInstance.close()// 先把原来的关闭
    }
    messageInstance = Message[type](options)// 再创建新的消息
  }
}
export default new ReMessage()
```

main.js 中引入

```js
import ReMessage from '@/utils/message'
Vue.prototype.$remess = ReMessage

// 全局使用
this.$remess.error(option)
this.$remess.success(option)
```
