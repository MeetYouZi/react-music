import styled from 'styled-components'
import {noWrap} from 'style/mixins'
import {$colorTheme, $fontSizeMedium} from 'style/variable'

export const LyricWrap = styled.div`
	position: relative;
  height: 165px;
  .songLyric {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    opacity: 1;
  }
`

export const LyricList = styled.ul`
	width: 100%;
  height: 160px;
  margin-top: 15px;
  overflow: hidden;
  mask-image: linear-gradient(180deg,hsla(0,0%,100%,0) 0,
  hsla(0,0%,100%,.6) 15%,#fff 25%,#fff 75%,hsla(0,0%,100%,.6) 85%,hsla(0,0%,100%,0));
`

export const LyricItem = styled.li`
	line-height: 28px;
  text-align: center;
  color: var(--c_txt2);
  ${noWrap()};
  transition: all .3s;
  &.active {
    font-size: ${$fontSizeMedium};
    color: ${$colorTheme};
  }
`


