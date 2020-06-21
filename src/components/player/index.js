import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { PlayerWarp } from './style'
import { withRouter } from 'react-router-dom'

const MiniPlayer = props => {
  const { currentSong } = props
  return (
    <PlayerWarp>
      {currentSong.name}
    </PlayerWarp>
  )
}

const mapStateToProps = (state) => ({
  currentSong: state.currentSong

})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MiniPlayer))
