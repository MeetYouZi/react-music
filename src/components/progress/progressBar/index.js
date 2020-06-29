import React, {useEffect, useState, useRef} from 'react'
import { prefixStyle } from '@/utils/dom'
import { ProgressBarWrap, BarInner } from './style'

const ProgressBar = props => {

  const { percent } = props

  const progressBtnWidth = 16
  // useRef 返回一个可变的 ref 对象，.current 该对象的属性已初始化为传递的参数（initialValue）。返回的对象将在组件的整个生存期内持续存在。
  const progress = useRef()
  const progressBtn = useRef()
  const progressBar = useRef()
  const [activeBar , setActiveBar] = useState(false)
  const [touch , setTouch] = useState({})
  const transform = prefixStyle('transform')

  useEffect(() => {
    if(percent >= 0 && percent <= 1 && !touch.initiated) {
      const barWidth = progressBar.current.clientWidth - progressBtnWidth;
      const offsetWidth = percent * barWidth;
      progress.current.style.width = `${offsetWidth}px`;
      progressBtn.current.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`;
    }
    // eslint-disable-next-line
  }, [percent])

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
    const endTouch = JSON.parse(JSON.stringify(touch));
    endTouch.initiated = false;
    setTouch(endTouch);
    _triggerPercent();
    setActiveBar(false)
  }

  const _triggerPercent = () => {
    const barWidth = progressBar.current.clientWidth - progressBtnWidth
    const curPercent = progress.current.clientWidth / barWidth
    props.percentChange(curPercent)
  }

  const _offset = (offsetWidth) => {
    // progress.current 可以获取到 dom 渲染后的节点
    progress.current.style.width = `${offsetWidth}px`
    progressBtn.current.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
  }

  const progressClick = (e) => {
    console.log(e, 'e')
    // Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
    const rect = progressBar.current.getBoundingClientRect()
    const offsetWidth = e.pageX - rect.left
    _offset(offsetWidth)
    _triggerPercent()
  }

  return (
    <ProgressBarWrap>
      <BarInner ref={progressBar} onClick={progressClick}>
        <div className={activeBar ? 'progress activeBar': 'progress'}
             ref={progress}></div>
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

export default React.memo(ProgressBar)
