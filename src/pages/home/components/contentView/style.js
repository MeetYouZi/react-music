import styled from 'styled-components'
import * as variable from 'style/variable'
import  * as mixins from 'style/mixins'

export const ContentViewBox = styled.div`
	position: relative;
`

export const ConMod = styled.div`
  position: relative;
  transition: all 0.3s ease-in;
  .con-tit {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 16px 10px;
    .con-tit-text {
      color: var(--c_txt1);
      font-size: ${variable.$fontSizeLarge};
      font-weight: bold;
    } 
    p {
      font-size: ${variable.$fontSizeSmall};
      color: var(--c_txt2);
      .iconright{
        font-size: ${variable.$fontSizeSmall};
      }
    }
      
  }
`

export const ConScrollX = styled.div`
  margin-top: -10px
`

export const ConScrollBd = styled.div`
  margin-bottom: -10px;
  padding: 10px 0;
  overflow-x: auto;
  overflow-y: hidden;
  .con-list {
    display: flex;
    margin: 0 12px;
    .list-item {
      vertical-align: top;
      display: inline-block;
      margin-bottom: 14px;
      font-size: ${variable.$fontSizeSmall};
      &:last-child {
        .list-box {
          margin-right: 16px;
        }
      }
      .list-box {
        width: 109px;
        margin: 0 4px;
        .list-media {
          height: 109px;
          position: relative;
          .list-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
          .cover_count {
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 17px;
            min-width: 14px;
            padding: 0 7px;
            border-radius: 8px;
            background: rgba(0,0,0,.4);
            .cover-count-num {
              display: block;
              margin-left: 2px;
              line-height: normal;
              font-size: ${variable.$fontSizeSmall};
              font-weight: 300;
              color: #fff;
            }
          }
        }
        .list-bd {
          margin-top: 8px;
          line-height: 17px;
          font-size: ${variable.$fontSizeSmall};
          color: var(--c_txt1);
          ${mixins.noWrapNumber(2)}
        }
      }
    }
  }
`
