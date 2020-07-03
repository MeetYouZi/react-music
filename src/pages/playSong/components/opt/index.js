import React from 'react'
import styled from 'styled-components'

const OptWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  z-index: 3;
  .opt_item {
    width: 38px;
    height: 38px;
    margin: 0 12px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &.icon-mini {
      border: 1px solid var(--c_txt1);
    }
    .iconfont {
      color: var(--c_txt1);
      font-weight: bold;
      line-height: 38px;
      font-size: 20px;
    }
  }
`

const OptBar = props => {

  const { iconMode, changeMode } = props
  const { prev, next, togglePlaying } = props
  const { playing } = props

  return (
    <OptWrap>
      <div className="opt_item" onClick={() => changeMode}>
        <i className="iconfont">{iconMode}</i>
      </div>
      <div className="opt_item" onClick={() => prev}>
        <i class="iconfont iconshangyiqu101"></i>
      </div>
      <div className="opt_item icon-mini" onClick={() => togglePlaying}></div>
      <div className="opt_item" onClick={() => next}>
        <i className="iconfont iconxiayiqu101"></i>
      </div>
      <div className="opt_item" onClick={() => togglePlaying}>
        <i className="iconfont iconmenuoff"></i>
      </div>
    </OptWrap>
  )
}

export default React.memo(OptBar)
