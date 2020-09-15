import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  ContentViewBox,
  ConMod,
  ConScrollX,
  ConScrollBd
} from './style'
import { getImgUrl } from '@/utils/format'

const ContentView = props => {
  const { musicList } = props

  const history = useHistory()

  // const _getImgUrl = (url, w, h) => {
  //   return getImgUrl(url, w, h)
  // }

  const handleClick = (musicItem, item, index) => {
    console.log(musicItem.key)
    const key = musicItem.key
    switch (key) {
      case 'hot':
        history.push(`/musicList/${item.id}`)
        break
      case 'musicList':
        history.push(`/playSong/${item.id}`)
        // this.playMusic(item, index)
        break
      case 'mv':
        // this.playMV(item)
        break
      case 'program':
        // this.handleToAlbum(item)
        // this.playMV()
        break
      default:
        console.log('啥也没有呢～')
    }
  }
  return (
    <ContentViewBox>
      {musicList.map((musicItem,index) => {
        return (
          <ConMod key={musicItem.key}>
            <div className="con-tit">
              <h2 className="con-tit-text">{musicItem.tit}</h2>
              {/*<p onClick="handleClickAlert">更多<i class="iconfont iconright"></i> </p>*/}
            </div>
            <ConScrollX>
              <ConScrollBd>
                <ul className="con-list">
                  {musicItem.list.map((item, index) => {
                    return (
                      <li className="list-item fade"
                        key={item.id}
                        onClick={() => handleClick(musicItem, item, index)}>
                        <div className="list-box">
                          <div className="list-media">
                            <img className="list-img" src={getImgUrl(item.picUrl, 120)}/>
                              {
                                item.playCount ? <div className="cover_count"><span className="cover-count-num">
                                  { item.playCount / 10000 }万</span></div> : ''
                              }
                          </div>
                          <div className="list-bd">
                            {item.name}
                          </div>
                        </div>
                      </li>
                    )}
                  )}
                </ul>
              </ConScrollBd>
            </ConScrollX>
          </ConMod>
        )
      })
      }
    </ContentViewBox>
  )
}

export default React.memo(ContentView)
