import React from 'react'
import { MusicBanner } from './style'

const ContentView = props => {
  const { musicList } = props
  console.log(musicList, 'musicList')
  return (
    <div>
      {musicList.length && musicList.map((item,index) => {
        return (
            <div key={item.key}>{item.tit}</div>
        )
      })
      }
    </div>
  )
}

export default ContentView
