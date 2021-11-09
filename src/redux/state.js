import { rerenderEntireTree } from '../render'

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'My first post=)', likesCount: 6 },
      { id: 3, message: 'Hello', likesCount: 2 },
    ],
    newPostText: 'it-kamasutra.com',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Sveta' },
      { id: 2, name: 'Dima' },
      { id: 3, name: 'Aleksandr' },
      { id: 4, name: 'Mihail' },
      { id: 5, name: 'Ekaterina' },
      { id: 6, name: 'diana' },
    ],
    messages: [
      { id: 1, message: 'Hi', name: 'Sveta' },
      { id: 2, message: 'How are you', name: 'Aleksandr' },
      { id: 3, message: 'OK', name: 'Sveta' },
      { id: 4, message: 'Hello', name: 'Diana' },
    ],
  },
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export default state
