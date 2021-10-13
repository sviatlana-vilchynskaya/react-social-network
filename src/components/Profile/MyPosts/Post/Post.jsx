import React from 'react'
import s from './Post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post
