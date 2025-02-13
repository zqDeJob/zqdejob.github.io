# 多个文件合并成一个

## 目的

读取一个文件夹下的所有内容（我这里是\*.properties 格式文件），合并到一个文件中（例如：data.js

## 内容

```js
var fs = require('fs');
var path = require('path');
var os = require('os');
var readline = require('readline');

// 读原本的文件
function fileDisplay(filePath){
  console.log('——————开始读i18n————————');
  fs.readdir(filePath,function(err,files){
    if(err){console.warn(err);}else{
      files.forEach(function(filename){
        // 文件绝对地址
        var dir = path.join(filePath,filename)
        console.log(dir+'——————————')
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(dir,function(err2,stats){
          if(err2){console.warn(err2);}else{
            //是文件
            //是文件夹
            var isFile = stats.isFile(),
                isDir = stats.isDirectory();
            console.log(isFile ? "————文件————" : "————文件夹————")
            if(isFile){
              var content = fs.readFileSync(dir, 'utf-8');
              writeFile(content,'i18n.js')
              console.log("写入成功——————"+content);
            }else if(isDir){
              fileDisplay(dir)
            }
          }
        })
      })
    }
  })
}
// 写文件
function writeFile(content,filePath){
	for(var i=0;i<content.length;i++){
		fs.appendFileSync(filePath,content[i]);
	}
}
/*
* 按行读取文件内容
* 返回：字符串数组
* 参数：fReadName:文件名路径
*      callback:回调函数
* */
function readFileToArr(fReadName,callback){
    var fRead = fs.createReadStream(fReadName);
    var objReadline = readline.createInterface({
        input:fRead
    });
    var arr = new Array();
    objReadline.on('line',function (line) {
        arr.push(line);
    });
    objReadline.on('close',function () {
        callback(arr);
    });
}
// 内容转格式
function splitArr(arr){
  return arr.map(function(item){
    if(item.indexOf("=")){
      var newarr = item.split("=")
      return `'${newarr[0]}': '${newarr[1]}'` + os.EOL
    }
  })
}

var args =  process.argv.slice(2)
if(args == "set"){
  readFileToArr('i18n.js',function(arr){
    var newarr = splitArr(arr)
    newarr.forEach(function(item,index){
      writeFile(item,'data.js')
    })

  })
}else{
  fileDisplay('./i18n')
}

// node node.js (读文件到i18n.js)
// node node.js set (读i18n.js 转格式后存到data.js)
```
