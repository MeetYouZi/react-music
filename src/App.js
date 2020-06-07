import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Music from '@/pages/music'
import Home from '@/pages/home'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home}/>
          <Route path='/music' exact component={Music}/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
