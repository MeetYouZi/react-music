import React from 'react'
import styled from 'styled-components'

const IconPlayWrap = styled.svg`
  width: 22px;
  height: 22px;
  fill: var(--color_black); // 填充颜色
`

const IconPlay = props => {
  return (
    <IconPlayWrap>
      <title>暂停</title>
      <path d="M10.182 5.091h0.727c0.401 0 0.727 0.326 0.727 0.727v20.364c0 0.401-0.326 0.727-0.727 0.727h-0.727c-0.401 0-0.727-0.326-0.727-0.727v-20.364c0-0.401 0.326-0.727 0.727-0.727zM21.091 5.091h0.727c0.401 0 0.727 0.326 0.727 0.727v20.364c0 0.401-0.326 0.727-0.727 0.727h-0.727c-0.401 0-0.727-0.326-0.727-0.727v-20.364c0-0.401 0.326-0.727 0.727-0.727z"></path>
    </IconPlayWrap>
  )
}

export default React.memo(IconPlay)
