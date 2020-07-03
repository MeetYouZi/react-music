import React, { useEffect, useState } from 'react'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import { MusicBanner } from './style'

// 无状态组件
const Banner = props => {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList } = props

  useEffect(() => {
    if(bannerList.length && !sliderSwiper){
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {el:'.swiper-pagination'},
      });
      console.log('0000');
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <MusicBanner>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className="swiper-slide" key={slider.imageUrl}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </MusicBanner>
  )
}

export default React.memo(Banner)
