import { USER_ACTION_TYPE  } from "./user.types";

 export const INITIAL_USER = {
    currentUser: null
  }

 export const userReducer = (state = INITIAL_USER, action)=>{
    const {type, payload} = action;
    switch(type){ 
      case USER_ACTION_TYPE.SET_CURRENT_USER: 
        return{
          ...state,
          currentUser: payload
        }
      default:
          return state;
    }
  }
/**  above, at default, every single reducer by default, needs to return the previous state if none of the cases match to the type !!! 
 *  we make this userReducer that we can use in root-reducer.js 
 * 
 * state and action by default, have values predefined
*/
