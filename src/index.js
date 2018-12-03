import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import data from './api'
//import App from './App'

// Custom components
import Playlist from './playlist/components/playlist'


import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Playlist data={data}/>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
