import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default ({ postId }) => {
  const [comments, setComments] = useState([])

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

    setComments(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

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
