import styled from 'styled-components'
import {$fontSizeSmall} from 'style/variable'
import {$fontSizeMedium} from 'style/variable'

export const CommentBox = styled.ul`
  position: relative;
`

export const CommentList = styled.ul`
  position: relative;
`

export const commentItem = styled.ul`
  display: flex;
  margin-top: 16px;
  .comment_item_avatar {
    margin-right: 8px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
  }
  .comment_item_content {
    flex: 1;
    border-bottom: 1px solid var(--bgborder);
    padding-bottom: 10px;
    box-sizing: border-box;
    .comment_header {
      display: flex;
      justify-content: space-between;
      color: var(--c_txt2);
      line-height: 20px;
      margin-bottom: 6px;
      .header_right {
        text-align: right;
        width: 90px;
        color: var(--c_txt2);
        .likeNum {
          font-size: ${$fontSizeSmall};
          padding-right: 5px;
        }
      }
      .header_left {
        flex: 1;
        .nickname {
          color: var(--c_txt2);
          font-size: ${$fontSizeMedium};
        }
        .time {
          color: var(--c_txt2);
          font-size: ${$fontSizeSmall};
        }
      }
    }
    .comment_desc {
      font-size: ${$fontSizeMedium};
      color: var(--c_txt1);
      line-height: 20px;
      text-align: justify;
    }
  }
`
