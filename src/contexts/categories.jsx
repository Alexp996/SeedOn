// import PRODUCT from '../shop-data.json';
import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data2";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const getCategories =  () => {
  const categoryMap = {};
  SHOP_DATA?.map((obj) => {
    categoryMap[obj.title.toLowerCase()] = obj.items;
  });
  return categoryMap;
};


export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(()=>{
    const getCategoriesMap = () =>{
      const categoryMap =  getCategories();
      console.log(categoryMap)
      setCategoriesMap(categoryMap);
    }
    return getCategoriesMap;
  },[])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
