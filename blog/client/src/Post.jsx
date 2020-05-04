import React from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

export default ({ post }) => {
  return (
    <div className="card mb-3" style={{ width: '30%'}}>
    <div className="card-body">
      <h3>{post.title}</h3>
      <CommentList comments={post.comments} />
      <hr />
      <CommentCreate postId={post.id} />
    </div>
    </div>
  )
}
