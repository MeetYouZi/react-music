import React from 'react'
import { formatTime } from '@/utils/utils'
import { useHistory } from 'react-router-dom'
import { MusicContentList, MusicItem } from './style'

const MusicPlayList = props => {
  const { musicList } = props

  const history = useHistory()

  return (
    <MusicContentList>
      {
        musicList.map(item => {
          return (
            <MusicItem key={item.id}
                       onClick={() => {history.push(`/playSong/${item.id}`)}}
            >
              <div className="item-box">
                <div className="list-content">
                  <h3 className="list-tit"><span className="list-txt">{item.name}</span></h3>
                  <p className="list-desc"><span className="list-txt">{item.singer}</span></p>
                </div>
                <p className="list-time">{formatTime(item.duration % 3600)}</p>
              </div>
            </MusicItem>
          )
        })
      }
    </MusicContentList>
  )
}

export default MusicPlayList
