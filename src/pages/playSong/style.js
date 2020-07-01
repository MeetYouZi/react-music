import styled from 'styled-components'
import  * as mixins from 'style/mixins'
import {$fontSizeSmall, $fontSizeMedium, $fontSizeLarge} from 'style/variable'

export const SongWrap = styled.div`
	background: var(--color_white);
`

export const MainContent = styled.div`
  position: relative;
  height: 300px;
  padding-bottom: 15px;
  overflow: hidden;
  z-index: 1;
  .main_wrap {
    position: relative;
    z-index: 1;
    .song_info{
      position: relative;
    }
    .song_name {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      line-height: 30px;
      color: var(--c_txt1);
      font-size: ${$fontSizeLarge};
      text-align: center;
    }
    .sing_name {
      margin: 0 20px 15px;
      text-align: center;
      ${mixins.noWrap()};
      color: var(--c_txt2);
      font-size: ${$fontSizeMedium};
    }
    .imgBox {
      width: 100%;
      height: 165px;
      display: flex;
      align-items: center;
      justify-content: center;
      .bg_img_cover{
        width: 140px;
        height: 140px;
        border-radius: 6px;
        box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
        }
      }
    }
  .play_progress_bar {
    margin-top: 50px;
    padding: 0px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: var(--c_txt2);
      font-size: ${$fontSizeSmall};
      width: 40px;
      text-align: center;
      padding: 0 6px;
    }
    .progress_bar {
      flex: 1;
    }
  }
  .opt {
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
  }
`

export const ImageBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to bottom, var(--bg-linear-gradient-1) 0, var(--bg-linear-gradient-2) 100%);
  }
  .bg_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.2;
    transform: scale(1.2);
    backdrop-filter: saturate(180%) blur(5px);
    filter: blur(2px);
  }
`

export const SongComment = styled.div`
  position: relative;
  padding: 0 16px;
  box-sizing: border-box;
  .comment_tit {
    height: 55px;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 55px;
    color: var(--c_txt1);
  }
`
