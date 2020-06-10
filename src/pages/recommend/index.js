import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import './style.styl'
import { withRouter } from 'react-router-dom'
import { getToplist } from '@/api'
import './style.styl'

const Recommend = () => {
  const [topList, setTopList] = useState([])
  // const [globalTopList, setGlobalTopList] = useState()

  const _getToplist = () => {
    getToplist().then(res => {
      const toplist = res.list.filter(item => {
        if (item.ToplistType) {
          return item
        }
      })
      setTopList(toplist)
      console.log(toplist, 'topList')
      // const globalTopList = res.list.filter(item => {
      //   if (!item.ToplistType) {
      //     return item
      //   }
      // })
      // setGlobalTopList(globalTopList)
    })
  }

  useEffect(() => {
    _getToplist()
  }, [])

  return (
    <>
      <div className="rank_list">
        <div className="rank_title">官方榜</div>
        <ul className="rank_list_top">
          {
            topList.length && topList.forEach((song, index) => {
              return (
                <li className="rank_song_list_item" key={song.id}>
                  <strong>{index + 1}.</strong>
                  {song.first}-{song.second}
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Recommend))

