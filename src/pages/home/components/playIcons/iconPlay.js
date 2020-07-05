import React from 'react'
import styled from 'styled-components'

const IconPlayWrap = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--color_black); // 填充颜色
`

const IconPlay = () => {
  return (
    <IconPlayWrap viewBox="0 0 32 32">
      <title>播放</title>
      <path
        d="M11.909 24.758l10.941-7.94-10.941-8.709v16.65zM9.727 5.091c0-0.164 0.056-0.324 0.159-0.453 0.25-0.314 0.708-0.367 1.022-0.116l14.799 11.78 0.136 0.142c0.236 0.325 0.164 0.78-0.161 1.016l-14.799 10.74c-0.124 0.090-0.273 0.139-0.427 0.139-0.401 0-0.727-0.326-0.727-0.727v-22.52z"></path>
    </IconPlayWrap>
  )
}

export default React.memo(IconPlay)
