import styled from 'styled-components'
import * as variable from 'style/variable'
import  * as mixins from 'style/mixins'
import {$colorTheme} from 'style/variable'

export const ProgressBarWrap = styled.div`
  height: 30px;
`
const activeBar =  () => {
  return `
    transition: box-shadow ease .2s;
    box-shadow: 0 0 10px ${$colorTheme};
  `
}

export const BarInner = styled.div`
  position: relative;
  top: 13px;
  height: 2px;
  background: #fff;
  .progress {
    position: absolute;
    height: 100%;
    background: ${$colorTheme};
    &.activeBar {
      ${activeBar}
    }
  }
  .progress-btn-wrapper {
    position: absolute;
    left: -8px;
    top: -13px;
    width: 30px;
    height: 30px;
    .progress-btn {
      position: relative;
      top: 12px;
      left: 7px;
      box-sizing: border-box;
      width: 4px;
      height: 4px;
      border: 0px solid ${$colorTheme};
      border-radius: 50%;
      background: ${$colorTheme};
      &.activeBar {
        top: 10px;
        width: 8px;
        height: 8px;
        ${activeBar}
      }
    }
  }
  
`


