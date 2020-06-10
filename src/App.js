import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import Music from '@/pages/music'
import Home from '@/pages/home/homeHooks'
import TabNav from '@/components/tabNav'
import Recommend from '@/pages/recommend'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TabNav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/music' exact component={Music}/>
          <Route path='/recommend' exact component={Recommend}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
