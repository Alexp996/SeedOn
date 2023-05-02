import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_ACTION_TYPE } from "./user.types";


export const setCurrentUser = (user) => 
     createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);

/** THE user will be the value for payload and the user_action_type will be the type.
 * 
 * This createAction is our created function in reducer.utils
 */
  