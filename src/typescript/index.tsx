import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './app';

const initialState = {
  brettIsAwesome: true
}

function howWeRoll(state: any, action: any) {
  if (typeof state === 'undefined') {
    return initialState
  }

  return state
}

let store = createStore(howWeRoll)

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)