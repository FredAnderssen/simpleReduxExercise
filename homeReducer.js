const initialState = {
  buttonEnabled: true
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUTTON_TRUE':
      return {
        buttonEnabled: state.buttonEnabled = true
      }
    case 'BUTTON_FALSE':
      return {
        buttonEnabled: state.buttonEnabled = false
      }
  }
  return state
}

export default reducer
