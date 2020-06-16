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

  const history = useHistory

  const _getImgUrl = (url, w, h) => {
    return getImgUrl(url, w, h)
  }

  const handleClick = (musicItem, item, index) => {
    // props.onItemClick(item)
    history.push(`/musicList/${item.id}`)
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
                          <img className="list-img" src={_getImgUrl(item.picUrl, 120)}/>
                          <div className="cover_count">
                            <span className="cover-count-num">{item.playCount}</span>
                          </div>
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

export default ContentView
