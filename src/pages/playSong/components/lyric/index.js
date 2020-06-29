import React from 'react'
import { LyricWrap, LyricList, LyricItem } from './style'

const Lyric = (props) => {
  const { lyric, nolyric } = props
  const currentIndex = 0

  return (
    <LyricWrap>
      <div className="songLyric">
        <LyricList>
          { !nolyric && lyric.map((item,index) => {
              return (
                <LyricItem className={currentIndex == index ? 'active': ''} key={index}>{ item.text }</LyricItem>
              )
            })
          }
        </LyricList>
      </div>
    </LyricWrap>
  )

}

export default React.memo(Lyric)
