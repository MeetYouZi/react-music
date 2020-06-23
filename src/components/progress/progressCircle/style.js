import styled from 'styled-components'
import { $colorTheme } from 'style/variable'

export const ProgressCircleWrap = styled.div`
  position: relative;
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.progressBackground {
      transform: scale(0.9);
      stroke: #fff;
    }
    &.progressBar {
      transform: scale(0.9) rotate(-90deg);
      stroke: ${$colorTheme};
     }
  }
`
