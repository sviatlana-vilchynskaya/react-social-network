import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" coins="12" />
        <Post message="I am fine" coins="3" />
        <Post message="What are you doing now?" coins="6" />
        <Post message="I am studying React." coins="1" />
      </div>
    </div>
  )
}

export default MyPosts
