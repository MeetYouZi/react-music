import React, { useRef } from 'react'
import { PomeloPlay, Icon, Text, Control } from './style'
import * as actionCreators from "@/store/actionCreators"
import ProgressCircle from '@/components/progress/progressCircle'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'


const MiniPlayer = props => {

  const radius = 30
  const { playing, currentSong } = props
  const { percent } = props
  const miniWrapper = useRef()
  const miniImage = useRef()

  let cdCls = playing ? '' : 'pause'
  let miniIcon = playing ? 'iconpause1' : 'iconplay'

  const togglePlaying = () => {

  }


  return (
    <PomeloPlay>
      <Icon>
        <div className="imgWrapper" ref={miniWrapper}>
          <img ref={miniImage}
               className="play"
               className={cdCls}
               width="44"
               height="44"
               src={`${currentSong.image}?param=100y100`}
          />
        </div>
      </Icon>
      <Text>
        <h2 className="name">{currentSong.name}</h2>
        <p className="desc">{currentSong.Singer}</p>
      </Text>
      <Control>
        <div className="progress-circle-box">
          <ProgressCircle radius={radius} percent={percent}>
            <i onClick={togglePlaying}
               className="iconfont icon-mini"
               className={miniIcon}
            ></i>
          </ProgressCircle>
        </div>
      </Control>
    </PomeloPlay>
  )
}

const mapStateToProps = (state) => ({
  // currentIndex: state.currentIndex,
  // playList: state.playList,
  currentSong: state.currentSong,
  playing: state.playing
})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MiniPlayer))

