import styled, { keyframes } from 'styled-components'
import {$colorTheme, $fontSizeMedium, $fontSizeSmall} from "style/variable";
import {noWrap} from "style/mixins";

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`

export const PomeloPlay = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 50px;
  z-index: 180;
  width: 100%;
  height: 50px;
  background: var(--playBg);
  backdrop-filter: saturate(180%) blur(5px);
`

export const Icon = styled.div`
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  padding: 0 10px 0 20px;
  margin-top: -20px;
  .imgWrapper {
    height: 100%;
    width: 100%;
    img {
      border-radius: 50%;
      &.play {
        animation: ${rotate} 10s linear infinite;
      }
      &.pause {
        animation-play-state: paused;
      }
    }
  }
`

export const Text = styled.div`
  display: flex;
  flex: 1;
  line-height: 20px;
  overflow: hidden;
  vertical-align: bottom;
  .name {
    margin-bottom: 2px;
    ${noWrap()};
    font-size: ${$fontSizeMedium};
    color: var(--color);
    padding-right: 2px;
    margin-right: 4px;
  }
  .desc {
    ${noWrap()};
    font-size: ${$fontSizeSmall};
    color: var(--c_txt2);
  }
`

export const Control = styled.div`
  flex: 0 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid ${$colorTheme};
  position: relative;
  margin-right: 10px;
  &.menu {
    font-size: 20px;
    border: 0px solid ${$colorTheme};
    .iconfont {
      font-weight: 600;
    }
  }
  .progress-circle-box {
    position: absolute;
    width: 30px;
    height: 30px;
  }
  .iconfont {
    font-size: 20px;
    color: ${$colorTheme};
    line-height: 30px;
    text-align: center;
  }
  .icon-mini {
    color: ${$colorTheme};
    font-size: 20px;
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
