import React from 'react'

export default ({ postId }) => {
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
