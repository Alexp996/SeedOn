


export const selectCurrentUser = ((state)=> state.user.currentUser)

/** this selectCurrentUser we will use in App.js. 

 * this functions from above is in fact useSelector((state)=>{}) but,  generalized
 * user, represents the key from the root-reducer.js, 
 * and the currentUser, represents the element that is updated with payload from the userReducer
 * From reducer, types, action and selector the steps to create these files are:
 * 1. Reducer 
 * 2. Types
 * 3. Action
 * 4. Selector
 * 
*/
