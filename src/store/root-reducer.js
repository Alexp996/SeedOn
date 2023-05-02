import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import {CategoriesReducer} from "./categories/category.reducer"

/* 1.this method, combineReducers, allows us to create a final big reducer that we can use inside in our store.js by combining smaller reducers together
    2. The keys and the values from obj that lives inside combineReducers's method, are going to be the name of the reducer slice and then,
    the actual reducer function itself.
*/

export const rootReducer = combineReducers({
    user: userReducer,
    categories: CategoriesReducer,
})