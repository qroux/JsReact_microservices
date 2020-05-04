import React from 'react'

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
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
