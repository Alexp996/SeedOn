import {CATEGORIES_ACTION_TYPES} from '../categories/category.types'


export const CATEGORIES_INITIAL_STATE = {
    categoriesArray: [],
}

export const CategoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {})=>{
    const {type, payload} = action;
    switch(type){
      case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state, 
                categoriesArray: payload }
      default:
            return state;
    }
}

/** we make this category reducer that we can use in root-reducer.js 
 * 
 * state and action by default, have values predefined
*/