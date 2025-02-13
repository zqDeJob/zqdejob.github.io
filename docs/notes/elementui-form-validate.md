# 常见验证

## 多个字段使用同个校验规则  validator

```js
  { validator: validateIP, trigger: 'blur', name: '首选DNS', empty: true }
  { validator: validateIP, required: true, trigger: 'blur', name: '网关' }
```

可以在对象中扩展自定义参数，例如 name,empty 等

统一在校验处理函数中通过 rule 获取

```js
callback(new Error(rule.name + '不能为空'))
```

## 多个表单一起校验

可以使用 v-for 配合组件去调用

```js
<div v-for="(item,index) in menuList" :key="item.val">
      <menu-form v-show="index === activeMenuIndex" :ref="'menuForm' + index" :component-index="index" @getGatewayInfo="getGatewayInfo" />
 </div>
```

其中有几个关键点：

- v-for 的 key：一般我们习惯性的会使用 :key="index" ，但是多行表单一般伴随着增删，所以此时的 key 就不可以绑定 key ，而应该使用唯一的变量，例如 id，name 等
- ref 的使用：我们将子组件 el-form 封装 menu-form 中，这里 ref 要使用拼接的方式，这里拼接采用的是 index，为了之后遍历触发校验
- 唯一 id 的使用：对于遍历的表单组件，需要传递一个唯一的下标（component-index)，作用是在表单组件往外传参时区分是第几个组件传的参

## 主动触发某几个字段，而不是触发全部

官方有 api，这里使用 validateField

```js
this.$refs.form.validateField('title')
this.$refs.form.validateField(['ip','username','pass'])
```

这里需要注意的是回调，这里返回的是 err (错误信息)和 validate 返回的 valid（是否合法），所以回调应该是这样使用

```js
this.$refs.form.validateField(['ip','username','pass'],err=>{
	if(err){
		console.log("submit fail")
	}
});
```

## 不通过 blur，focus，change 等事件主动触发校验

```js
this.$refs['form'].fields[0].validateMessage = 'error message'
this.$refs['form'].fields[0].validateState = 'error'
```
