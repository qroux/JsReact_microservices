import React from 'react'

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content

    if (comment.status === 'approved') {
      content = comment.content
    }

    if (comment.status === 'rejected') {
      content = 'Comment moderated'
    }

    if (comment.status === 'pending') {
      content = 'Awaiting moderation'
    }

    return <li key={comment.id}>{content}</li>
  })

  return (
    <div className="pt-4">
      <h5>Comments</h5>
      <ul>
        {renderedComments}
      </ul>
    </div>
  )
}
