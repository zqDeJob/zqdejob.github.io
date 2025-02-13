# 利用 blob 加密防下载

一些网站的视频为了防止下载，通常会采用 blob 加密的做法；
其实这不是特殊的视频传输协议，只是一种 HTML5 Video Blob 格式。
并且大部分网页视频的格式都是 m3u8。

参考的内容：

- [图片/视频上传转成 base64/blob 格式](https://blog.csdn.net/qq_39364032/article/details/82177456)
- [base64 和 Blob 相互转换](https://www.cnblogs.com/jiujiaoyangkang/p/9396043.html)
- [HTTP Content-type 对照表](http://tool.oschina.net/commons/)

## 读取

这里假设服务器上已经有一份文件，现在要前端加密展示

### 后台读取文件，并转成二进制推送到前台

> `file_get_contents` ： 转为二进制内容
> `base64_encode`： 对数据进行编码

```php
<?php
	header("Content-type:image/jpeg");
	echo base64_encode(file_get_contents('images/1.jpeg'));
?>
```

### 前端读到二进制内容，转成 blob 格式，赋值到对应 video

因为后台传输过来的只有后面的二进制内容，不包括标识符，
所以方法`dataURLtoBlob` 的参数中拼接了标识符： `data:image/png;base64,`
当然这里的拼接内容也可以后台直接返回

```js
//读取内容
var fileUpload = function(_link,_type){
    	$.ajax({
	    	url: 'post.php',
	    	type:'post',
	    	success:function(req){
		        //请求成功时处理
		        $('img').attr('src',dataURLtoBlob('data:image/jpeg;base64,'+req));
		    },
	    })
    }
```

```js
//base64 => blob
function dataURLtoBlob(dataurl) {
	    var arr = dataurl.split(',');
	    var mime = arr[0].match(/:(.*?);/);
	    var bstr = atob(arr[1]);
	    var n = bstr.length;
	    var u8arr = new Uint8Array(n);
	    var mime = mime[1];
	    while (n--) {
	        u8arr[n] = bstr.charCodeAt(n);
	    }
	    return window.URL.createObjectURL(new Blob([u8arr], { type: mime }));
	}
```

整个 html 内容：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<style type="text/css">
		img,video{width: }
	</style>
</head>
<body>
<input type="file" name="main" id="main" value="" accept="image/png, image/jpeg, image/gif, image/jpg" onchange="uploadImg(event)">
<input type="file" accept="video/*" id="video" name="video" onchange="uploadVideo(event)">
<video></video>
</body>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript">
    var fileUpload = function(_link,_type){
    	$.ajax({
	    	url: 'post.php',
	    	type:'post',
	    	success:function(req){
		        //请求成功时处理
		        $('img').attr('src',dataURLtoBlob('data:image/jpeg;base64,'+req));
		    },
	    })
    }
    function dataURLtoBlob(dataurl) {
	    var arr = dataurl.split(',');
	    var mime = arr[0].match(/:(.*?);/);
	    var bstr = atob(arr[1]);
	    var n = bstr.length;
	    var u8arr = new Uint8Array(n);
	    var mime = mime[1];
	    while (n--) {
	        u8arr[n] = bstr.charCodeAt(n);
	    }
	    return window.URL.createObjectURL(new Blob([u8arr], { type: mime }));
	}
    fileUpload();
</script>
</html>
```
