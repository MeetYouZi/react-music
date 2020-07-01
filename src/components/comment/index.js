import React from 'react'

import { CommentList, commentItem } from './style'

const Comment = props => {

  const { hotCommentList } = props

  return (
    <>
      <CommentList>
        { hotCommentList.map(item => {
          return (<commentItem>
            <div className="comment_item_avatar">
              <img src={`${item.user.avatarUrl}?param=50y50`}/>
            </div>
            <div className="comment_item_content">
              <div className="comment_header">
                <div className="header_left">
                  <p className="nickname">{item.user.nickname}</p>
                  <p className="time">{item.time}</p>
                </div>
                <div className="header_right">
                  <span className="likeNum">{item.likedCount}</span>
                  <i className="iconfont icondianzan"></i>
                </div>
              </div>
              <div className="comment_desc">
                {item.content}
              </div>
            </div>
          </commentItem>)
        })
        }
      </CommentList>
    </>
  )


}

export default React.memo(Comment)
