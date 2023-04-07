import CategoryItem from '../category-item/category-item.components';
import './category-container.style.scss';

const CategoryContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
