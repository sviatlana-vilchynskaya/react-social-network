import React from 'react'
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { compose } from 'redux'

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts)
