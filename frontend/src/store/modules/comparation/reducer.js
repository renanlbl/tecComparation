const initialState = [
  {
    id: 0,
    value: '',
    text: '',
    open: false,
  },
  {
    id: 1,
    value: '',
    text: '',
    open: false,
  }
]

export const comparation = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MORE':
      return state.concat(
        {
          id: action.index + 2,
          value: '',
          text: '',
          open: false,
        },
        {
          id: action.index + 3,
          value: '',
          text: '',
          open: false,
        }
      )
    case 'SHOW_TEXTAREA':
      return state.map(item => item.id === action.index ? { ...item, open: item.open = true } : item)
    case 'HANDLE_TEXTAREA':
      return state.map(item => item.id === action.payload.index ? { ...item, text: action.payload.event.target.value } : item)
    case 'HANDLE_INPUT':
      return state.map(item => item.id === action.payload.index ? { ...item, value: action.payload.event.target.value } : item)
    default:
  }
  return state;
}