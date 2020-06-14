import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'style/theme.css'
import * as serviceWorker from './serviceWorker'

// 初始化主题
const themeBg = localStorage.getItem('pomeloReactMusic_themeBg') || 'white'
document.querySelector('html').className = themeBg

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
