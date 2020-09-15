import React from 'react'
import { dateFormat } from '@/utils/format'

import { CommentList, CommentItem } from './style'

const Comment = props => {

  const { hotCommentList } = props

  return (
    <>
      <CommentList>
        { hotCommentList.map(item => {
          return (
            <CommentItem key={item.commentId}>
              <div className="comment_item_avatar">
                <img src={`${item.user.avatarUrl}?param=50y50`}/>
              </div>
              <div className="comment_item_content">
                <div className="comment_header">
                  <div className="header_left">
                    <p className="nickname">{item.user.nickname}</p>
                    <p className="time">{dateFormat(new Date(item.time), 'yyyy-MM-dd hh:mm')}</p>
                  </div>
                  <div className="header_right">
                    <span className="likeNum">{item.likedCount}</span>
                    <i className="iconfont">&#xe694;</i>
                  </div>
                </div>
                <div className="comment_desc">
                  {item.content}
                </div>
              </div>
            </CommentItem>
          )
        })
        }
      </CommentList>
    </>
  )
}

export default React.memo(Comment)
