import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import { GlobalStyle } from './style'
const MusicList = lazy(() => import('@/pages/musicList'))
const Home = lazy(() => import('@/pages/home/homeHooks'))
const TabNav= lazy(() => import('@/components/tabNav'))
const Recommend = lazy(() => import('@/pages/recommend'))
const PlaySong = lazy(() => import('@/pages/playSong'))

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <BrowserRouter>
        <Suspense fallback={<div>loading</div>}>
          <TabNav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/musicList/:id' exact component={MusicList}/>
            <Route path='/recommend' exact component={Recommend}/>
            <Route path='/playSong/:id' exact component={PlaySong}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
