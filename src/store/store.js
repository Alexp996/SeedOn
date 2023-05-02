import { compose, applyMiddleware } from "redux";
import {legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger'; 
import {rootReducer} from './root-reducer'

/* 
1. logger = is something that allows us to see what the state looks like before an action is dispached,
            what the action is, and then how the state in turn looks after the action.
            It's an extension that tracks the application's state changes. You can trace, jump, skip any action that has been dispatched. 
*/ 
const middleWares = [logger];
// the middleWares const here, catch actions before they hit our re ducers and they log out the state 
// the middleWares = little library helpers that run before an action hits the reducer
// So, whenever you dispatch an action before that action hits the reducers,
// it hits the middleware first

const composedEnhancers = compose(applyMiddleware(...middleWares))


/* the second parameter from createStore func is optional. */
export const store = createStore(rootReducer, undefined, composedEnhancers)
//this store we will use in index.js inside the store object;