import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Custom components
import Home from './pages/containers/home'

import * as serviceWorker from './serviceWorker'

// data
import data from './api.json'

ReactDOM.render(
    <Home data={data}/>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
