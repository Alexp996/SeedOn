import './category.scss'
import {useParams} from "react-router-dom";
import { useEffect, useState} from "react";

import ProductCard from "../../components/product-card/product-card";

import { useSelector } from 'react-redux';
import { selectCategory } from '../../store/categories/category.selector';


const Category = () =>{
 const {category} = useParams()
 /** this useParams() is used to retrieve the parameter value named category from the page URL.
  * for example, example.com/category/hats, then the value of "category" will be " hats"
 */
 const categoriesMap = useSelector(selectCategory)
  const [products, setProducts] = useState(categoriesMap[category])


  
  useEffect(()=>{
    setProducts(categoriesMap[category])
  },[category, categoriesMap])
 return(
   <>
     <h2 className="category-title">{category.toUpperCase()}</h2>
     <div className="category-container">

      {
       products?.map((product)=>(
        <ProductCard key={product.id} product={product} />
      ))
      }
     </div>
   </>
 )
}
export default Category;