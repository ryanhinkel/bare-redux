import { run } from './run'
import { store, actions } from './store'

store.subscribe(() => console.log(store.getState()))

run(actions)
