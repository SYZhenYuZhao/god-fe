import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Button } from 'antd'
import styles from './main.css'

export default function () {
    return <Switch>
        <Route path='/' render={() => <div className={styles['aa']}><Button type="primary">123</Button>   </div>}></Route>
    </Switch>
}