import { createStore, bindActionCreators } from 'redux'
import { run } from './component'

const initialState = { value: 0, error: '' }

const reducer = (state = initialState, { type, value }) => {
  if (type === 'ADD') {
    return { ...state, value: state.value + value }
  } else if (type === 'SUBTRACT') {
    return { ...state, value: state.value - value }
  } else if (type === 'MULTIPLY') {
    return { ...state, value: state.value * value }
  } else if (type === 'DIVIDE') {
    return value === 0
      ? { ...state, error: 'Cannot divide by 0' }
      : { ...state, value: state.value / value }
  } else {
    return state
  }
}

const store = createStore(reducer)

const actions = {
  add: (value) => ({ type: 'ADD', value }),
  subtract: (value) => ({ type: 'SUBTRACT', value }),
  multiply: (value) => ({ type: 'MULTIPLY', value }),
  divide: (value) => ({ type: 'DIVIDE', value }),
}

export const bound = bindActionCreators(actions, store.dispatch)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))

run()

