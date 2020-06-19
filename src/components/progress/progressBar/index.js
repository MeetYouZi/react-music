import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import { prefixStyle } from '@/utils/dom'
import { ProgressBarWrap, BarInner } from './style'

const ProgressBar = props => {

  const progressBtnWidth = 16
  // useRef 函数组件没有实例
  const progress = useRef()
  const progressBtn = useRef()
  const progressBar = useRef()
  const [activeBar , setActiveBar] = useState(false)
  const [touch , setTouch] = useState({})
  const transform = prefixStyle('transform')

  const progressTouchStart = (e) => {
    const startTouch = {}
    startTouch.initiated = true
    startTouch.startX = e.touches[0].pageX
    startTouch.left = progress.current.clientWidth
    setTouch(startTouch)
  }
  const progressTouchMove = (e) => {
    setActiveBar(true)
    if(!touch.initiated) return
    const deltaX = e.touches[0].pageX - touch.startX
    const barWidth = progressBar.current.clientWidth - progressBtnWidth
    const offsetWidth = Math.min(Math.max(0, touch.left + deltaX), barWidth)
    _offset(offsetWidth)
  }
  const progressTouchEnd = () => {
    setActiveBar(false)
  }

  const _offset = (e) => {

  }

  return (
    <ProgressBarWrap>
      <BarInner ref={progressBar}>
        <div className={activeBar ? 'progress activeBar': 'activeBar'} ref={progress}></div>
        <div className="progress-btn-wrapper"
             ref={progressBtn}
             onTouchStart={progressTouchStart}
             onTouchMove={progressTouchMove}
             onTouchEnd={progressTouchEnd}
          >
          <div className={activeBar ? 'progress-btn activeBar' : 'progress-btn'}></div>
        </div>
      </BarInner>
    </ProgressBarWrap>
  )

}

export default ProgressBar
