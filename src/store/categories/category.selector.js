import SHOP_DATA from "../../shop-data2";


export const selectCategory = (state) => state.categories.categoriesArray;
export const getCategories =  () => {
    const categoryMap = {};
    SHOP_DATA?.map((obj) => {
      categoryMap[obj.title.toLowerCase()] = obj.items;
    });
    return categoryMap;
  };

/** this selectCategory we will use in Shop.js. 
 * this functions from above is in fact useSelector((state)=>{}) generalized
 * categories, represents the key from the root-reducer.js, 
 * and the categoriesMap, represents the element that is updated with payload from the CategoriesReducer
 * From reducer, types, action and selector the steps to create these files are:
 * 1. Reducer 
 * 2. Types
 * 3. Action
 * 4. Selector
 * 
*/