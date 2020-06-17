import styled from 'styled-components'
import * as variable from 'style/variable'
import  * as mixins from 'style/mixins'

export const MusicContentList = styled.ul`
  overflow: hidden;
`

export const MusicItem = styled.li`
  position: relative;
  padding: 10px 16px;
  overflow: hidden;
  color: var(--color);
  .item-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    overflow: hidden;
    color: var(--c_txt1);
    .list-num {
      min-width: 10px;
      text-align: right;
      padding-right: 6px;
    }
    .list-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      overflow: hidden;
    }
    .list-tit {
      font-size: ${variable.$fontSizeMedium};
      line-height: 24px;
      width: 100%;
      color: inherit;
      }
    .list-desc {
      max-width: 95%;
      overflow: hidden;
      line-height: 18px;
      color: var(--c_txt2);
      font-size: ${variable.$fontSizeSmall};
      }
    .list-time {
      font-size: ${variable.$fontSizeSmall};
      color: var(--c_txt2);
      }
    .list-txt {
      text-align: left;
      display: block;
      font-size: inherit;
      ${mixins.noWrap()};
      }
    }
  &.active{
    color: var(--theme_color);
    .list-desc, .list-time, .list-tit{
      color: var(--theme_color);
    }
  }
`
