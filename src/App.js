import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import Music from '@/pages/music'
import Home from '@/pages/home/homeHooks'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/music' exact component={Music}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
