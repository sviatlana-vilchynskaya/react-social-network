const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let initialState = {
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
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      }

    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      }

    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
})

export default dialogsReducer
