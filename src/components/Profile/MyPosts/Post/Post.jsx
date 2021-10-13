import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg" />
      {props.message}
      <div>
        <span>like {props.coins}</span>
      </div>
    </div>
  )
}

export default Post
