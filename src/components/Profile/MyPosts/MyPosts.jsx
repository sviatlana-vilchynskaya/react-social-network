import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'My first post=)', likesCount: 6 },
    { id: 3, message: 'Hello', likesCount: 2 },
  ]

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
        <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
        />
        <Post
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
        />
        <Post
          message={postsData[2].message}
          likesCount={postsData[2].likesCount}
        />
      </div>
    </div>
  )
}

export default MyPosts
