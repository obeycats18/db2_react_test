import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'

import {infoReducer} from './reducers'

const _rootReducer = combineReducers({

    info: infoReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type GlobalStateT = ReturnType<typeof _rootReducer>

export const store = createStore(
    _rootReducer,
    composeEnhancers(
        applyMiddleware(reduxThunk)
    )
)
