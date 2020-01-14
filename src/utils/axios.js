import axios from 'axios';
import { message, Modal } from 'antd';

//设置超时时间30秒
const defaultTimeout = 30000
window.errorMsgList = []

export function get(url, data, timeout = defaultTimeout) {
    return axios.get(url, {
        params: data,
        timeout
    });
}

// By default, axios serializes JavaScript objects to JSON
export function post(url, data, timeout = defaultTimeout) {
    return axios({
        url,
        method: 'post',
        data,
        timeout
    });
}

// By default, axios serializes JavaScript objects to JSON
export function postForm(url, data = {}, timeout = defaultTimeout) {
    if (typeof (data) != 'object') {
        return
    }
    return axios({
        url,
        method: 'post',
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        transformRequest: [
            function (data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                }
                return ret;
            }
        ],
        data,
        timeout
    });
}

// By default, axios serializes JavaScript objects to JSON
export function put(url, data) {
    return axios({
        url,
        method: 'put',
        data,
    });
}

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.headers = Object.assign({}, config.headers, { "Request-Type": "XMLHTTPRequest" })
        return config;
    },
    function (error) {
        // Do something with request error
        if (error.message.includes('timeout')) {
            Modal.error({
                title: '错误',
                content: '网络超时，请稍后再试！'
            })
        }
        console.log(error, 'requestError')
        return Promise.reject(error);
    },
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
    res => {
        if (res.data && res.data.code) {
            let errorMsg = res.data.message;
            if (window.errorMsgList.findIndex(item => item == errorMsg) != -1) {
                return
            }
            window.errorMsgList.push(errorMsg)
            errorMsg && Modal.error({
                title: '错误',
                content: errorMsg,
                onOk: () => {
                    let index = window.errorMsgList.findIndex(item => item === errorMsg)
                    window.errorMsgList.splice(index, 1)
                }
            });
            return Promise.reject(errorMsg);
        }
        return res;
    },
    error => {
        if (error.response && error.response.status) {
            const statusCode = error.response.status;
            let errorMsg = '未知错误！'
            if (statusCode >= 400 && statusCode < 500) {
                errorMsg = '客户端错误'
                if (statusCode == 404) {
                    errorMsg = '404访问不到'
                }
            }
            if (statusCode >= 500 && statusCode < 600) {
                if (statusCode == 504) {
                    errorMsg = '请求超时，请稍后重试！'
                } else {
                    errorMsg = '服务器错误，请稍后重试！'
                }
            }
            if (window.errorModalShow) {
                return
            }
            window.errorModalShow = true;
            Modal.error({
                title: '错误',
                content: errorMsg,
                onOk: () => {
                    window.errorModalShow = false;
                }
            });
            return Promise.reject(errorMsg);
        }
        return Promise.reject(error);
    },
);

export default axios;
