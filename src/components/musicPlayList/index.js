import React from 'react'
import { formatTime } from '@/utils/utils'
import {useHistory, withRouter} from 'react-router-dom'
import  * as actionCreators from '@/store/actionCreators'
import { MusicContentList, MusicItem } from './style'
import {connect} from 'react-redux'

const MusicPlayList = props => {
  const { musicList } = props
  const { setPlayList } = props

  const history = useHistory()

  const handlePlayItem = (musicList, index, id) => {
    setPlayList(musicList)
    history.push(`/playSong/${id}`)
  }

  return (
    <MusicContentList>
      {
        musicList.map((item, index) => {
          return (
            <MusicItem key={item.id}
                       onClick={() => handlePlayItem(musicList, index, item.id)}
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  setPlayList(musicList) {
    dispatch(actionCreators.setPlayList(musicList));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MusicPlayList))
