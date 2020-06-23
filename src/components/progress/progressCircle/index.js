import React from 'react'
import { ProgressCircleWrap } from './style'

const ProgressCircle = props => {

  const { radius, percent } = props

  const dashArray = Math.PI * 100
  const dashOffset = (1 - percent) * dashArray

  return (
    <ProgressCircleWrap>
      <svg width={radius} height={radius} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="progressBackground" r="50" cx="50" cy="50" fill="transparent"/>
        <circle className="progressBar" r="50" cx="50" cy="50" fill="transparent" strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}/>
      </svg>
      {props.children}
    </ProgressCircleWrap>
  )
}

export default ProgressCircle
