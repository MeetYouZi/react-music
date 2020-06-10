import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getBanner } from '@/api'
import Search from '@/pages/home/components/search'
import Banner from '@/pages/home/components/banner'

const Home = () => {
  const [ bannerList, setBannerList ] = useState([])

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

  useEffect(() => {
    _getBannerList()
  }, []);

  return (
    <>
      <Search/>
      {isShow()}
      <div>home1111</div>
    </>
  )

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
