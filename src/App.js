import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import { GlobalStyle } from './style'
import { IconStyle } from 'style/iconfonts/iconfont'
import Player from '@/components/player'
import router from './router/index';

const TabNav= lazy(() => import('@/components/tabNav'))

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <IconStyle/>
      <BrowserRouter>
        <Suspense fallback={<div>loading</div>}>
          <TabNav/>
          { renderRoutes(router) }
          <Player></Player>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
