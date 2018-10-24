# best-demo

本项目会长期更新，目标是一个可以适用于pc、移动端的初始化项目，本期针对axios进行了简单的封装，并且加入了jsonp,以适用更多的需求场景，欢迎star

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## api.js 说明

jsonp 调用方式

封装代码：
``` bash
    jsonp(url,data,option) {
        url+=(url.indexOf('?')<0?'?':'&')+formatParam(data)
        return new Promise((resolve,reject) => {
            getJsonp(url,option,(err,data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    }
```

使用示例：

let data = await this.$api.jsonp("https://sug.so.360.cn/suggest",{word:"c",name:"stf"},{name:"suggest"});

生成的请求链接如下：

https://sug.so.360.cn/suggest?word=c&name=stf&callback=suggest

