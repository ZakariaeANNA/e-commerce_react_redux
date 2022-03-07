import { configureStore } from '@reduxjs/toolkit'
import rootRducers from './reducers/rootReducer'
const store = configureStore({
  rootRducers
})
export default store;