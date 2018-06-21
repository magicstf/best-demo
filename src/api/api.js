import axios from 'axios'
import qs from 'qs'
import getJsonp from 'jsonp'

// 全局配置
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'https://cnodejs.org/api/v1' :"正式接口"

axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 1000

axios.defaults.withCredentials = false;

// 请求拦截器
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

function formatParam(data) {
    let url='';
    for(var k in data){
        let value=data[k]!==undefined?data[k]:''
        url+=`&${k}=${encodeURIComponent(value)}`
    }
    return  url ?url.substring(1):''
}
// 对外方法
export default {
    get(url,param) {
        // return axios({method:'get', url, params:param});
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params:param,
            }).then(res => {
                resolve(res)
            })
        })
    },
    post(url,param) {
        // return axios({method:'post', url, data:qs.stringify(param)});
        return new Promise((resolve, reject) => {
            axios({
                method:'post',
                url,
                data:qs.stringify(param)
            }).then(res => {
                resolve(res);
            })
        })
    },
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
}