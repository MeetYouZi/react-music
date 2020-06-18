import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
import { getToplist } from '@/api'
import { RankList, RankTitle, RankListTop } from './style'

const Recommend = (props) => {
  const [topList, setTopList] = useState([])
  const history = useHistory()
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
    <RankList>
      <RankTitle>官方榜</RankTitle>
      <RankListTop>
        {
          topList.map((item, index1) => {
            return (
              <li className="rankSongListItem"
                  key={item.id}
                  onClick={() => { history.push(`/musicList/${item.id}`)}}
              >
                <div className="ank_list_left">
                  <h2 className="rank_list_tit">{item.name}</h2>
                  <ol className="rank_song_list">
                    {
                      item.tracks.map((sing, index) => {
                        return (
                          <li className="rank_song_list_item" key={index}>
                            <strong>{index + 1}.</strong>
                            {sing.first}-{sing.second}
                          </li>
                        )
                      })
                    }
                  </ol>
                </div>
                <div className="rank_list_media">
                  <img className="rank_list_img" src={`${item.coverImgUrl}?param=100y100`}/>
                </div>
              </li>
            )
          })
        }
      </RankListTop>
    </RankList>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Recommend))

