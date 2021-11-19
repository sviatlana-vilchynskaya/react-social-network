import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from '../../redux/users-reducer'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  debugger
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },

    setUsers: (users) => {
      debugger
      dispatch(setUsersAC(users))
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },

    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
