import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { getBanner, getPersonalized, getNewSongs, getPersonalizedMv, getDjprogram } from '@/api'
import formatSongs from '@/utils/song'
import Search from '@/pages/home/components/search'
import Banner from '@/pages/home/components/banner'
import ContentView from '@/pages/home/components/contentView'

const Home = (props) => {
  const [ bannerList, setBannerList ] = useState([])
  const [ musicList, setMusicList ] = useState([])
  const [ songList, setSongList ] = useState([])

  const titList = [{
    key: 'hot',
    name: '热门推荐'
  }, {
    key: 'musicList',
    name: '最新音乐'
  }, {
    key: 'mv',
    name: '推荐MV'
  }, {
    key: 'program',
    name: '推荐电台'
  }]

  const isShow = () => {
    if(bannerList.length) {
      return <Banner bannerList={bannerList}/>
    } else {
      return false
    }
  }

  const _getBannerList = () => {
    getBanner().then(res => {
      setBannerList(res.banners)
    })
  }

  const _getMusicList = () => {
    Promise.all([
      _getPersonalized(),
      _getNewSongs(),
      _getPersonalizedMv(),
      _getDjprogram()]
    ).then(res => {
      const allList = res
      setSongList(res[1])
      let musicArr = []
      allList.forEach((item, index) => {
        musicArr.push({
          key: titList[index].key,
          tit: titList[index].name,
          id: 'musicList' + index,
          list: item
        })
      })
      setMusicList(musicArr)
    })
  }
    // 热门音乐
  const _getPersonalized = () => {
    return new Promise(resolve => {
      getPersonalized({ limit: 15 }).then(res => {
        resolve(res.result)
      })
    })
  }
  // 最新音乐
  const _getNewSongs = () => {
    return new Promise(resolve => {
      getNewSongs().then(res => {
        resolve(res.result)
        // this.newList = res.result
      })
    })
  }
  // 最新MV
  const _getPersonalizedMv = () => {
    return new Promise(resolve => {
      getPersonalizedMv().then(res => {
        resolve(res.result)
        // this.hotMvList = res.result
      })
    })
  }
  // 推荐电台
  const _getDjprogram = () => {
    return new Promise(resolve => {
      getDjprogram().then(res => {
        resolve(res.result)
        // this.djprogramList = res.result
      })
    })
  }

  useEffect(() => {
    _getBannerList()
  }, []);

  useEffect(() => {
    _getMusicList()
  }, []);

  return (
    <>
      <Search/>
      {isShow()}
      <ContentView musicList={musicList}/>
    </>
  )

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home))
