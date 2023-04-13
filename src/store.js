import { createStore } from 'redux'

const initialState = {
  count: 0,
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export const store = createStore(counterReducer)
