import React, { useState } from 'react'
import axios from 'axios'

export default () => {
  const [title, setTitle] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    await axios.post('http://posts.com/posts/create', {
      title
    })

    setTitle('')
  }

  return (
    <div className="my-5 mx-3">
      <h3>Create your own Post</h3>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            className="form-control"
           />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
   )
}
