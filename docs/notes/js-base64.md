# base64 和 blob 上传与互换

## 1. 图片上传

```html
<input type="file" name="main" id="main" value=""
accept="image/png, image/jpeg, image/gif, image/jpg" onchange="uploadImg(event)">
```

```js
//转化为base64格式
uploadImg:function(e){
     var file = e.target.files[0]
     if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
         this.$vux.toast.text('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种', 'middle')
         return false
     }
     var reader = new FileReader()
     reader.readAsDataURL(file)
     reader.onload = (e) => {
         console.log("图片地址" + e.target.result)
         //这里将base64提交到后台
     }
 }

//转为blob格式
uploadImg:function(e){
     var file = e.target.files[0]
     if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
         this.$vux.toast.text('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种', 'middle')
         return false
     }
     var reader = new FileReader()
     reader.readAsArrayBuffer(file)
     reader.onload = (e) => {
       let data
       if (typeof e.target.result === 'object') {
           data = window.URL.createObjectURL(new Blob([e.target.result]))
       } else {
           data = e.target.result
       }
       this.imgsrc = data
       // 这里是本地预览
       console.log("图片地址：" + data)
   }
 }
```

## 2. 视频上传

```html
<input type="file" accept="video/*" id="video" name="video"  onchange="uploadVideo(event)">
```

```js
//转为base64格式
uploadVideo(e) {
   	var that = this;
     var video = event.target.files[0];  //选择的文件
     var reader = new FileReader();
     var rs = reader.readAsDataURL(video);
     reader.onload = (e) =>{
       var videoSrc= e.target.result;
       console.log(videoSrc)
       //这里将base64提交到后台
     }
 }

//转为blob格式
uploadVideo(e) {
  var that = this;
    var video = event.target.files[0];  //选择的文件
    var reader = new FileReader();
    var rs =  reader.readAsArrayBuffer(video)
    reader.onload = (e) => {
      let data
      if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
      } else {
          data = e.target.result
      }
      console.log("视频地址" +data)
      // 这里是本地预览
  }
}
```

## 3. base64 和 Blob 相互转换

```js
//Base64 to Blob
//dataurl - data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAC+CAMAAAB...
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}


//Blob to Base64
function blobToDataURL(blob, callback) {
    let a = new FileReader();
    a.onload = function (e) { callback(e.target.result); }
    a.readAsDataURL(blob);
}
```
