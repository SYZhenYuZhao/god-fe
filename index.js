import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import App from './src/router'
import 'moment/locale/zh-cn';
import 'assest/css/app'

moment.locale('zh-cn');

ReactDom.render(
    <ConfigProvider locale={zhCN}>
        <Router>
            <App />
        </Router>
    </ConfigProvider>
    ,
    document.getElementById("app")
)