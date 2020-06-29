import React from 'react'
import { MusicBanner } from './style'

// 无状态组件
const Banner = props => {
  const { bannerList } = props
  return (
    <MusicBanner>
      <img src={bannerList[0].imageUrl} alt='' />
    </MusicBanner>
  )
}

export default React.memo(Banner)
