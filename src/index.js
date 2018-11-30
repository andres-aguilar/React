import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'

// Custom components
import Media from './components/media'


import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Media title='Qué es responsive design?' author='Andrés Aguilar' image='./images/covers/responsive.jpg'/>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
