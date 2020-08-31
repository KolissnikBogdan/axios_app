import { createStore } from 'redux'
import reducers from './redusers'

export default createStore(reducers)

export type RootState = ReturnType<typeof reducers>