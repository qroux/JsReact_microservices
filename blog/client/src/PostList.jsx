import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

export default () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
   const res = await axios.get('http://posts.com/posts')
   setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts).map(post => {
    return <Post key={post.id} post={post} />
  })

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between" >
      { renderedPosts }
    </div>
  )
}
