import CategoryContainer from '../../components/directory/directory.components';
import { Outlet } from 'react-router-dom';
import './home.scss';
import SHOP_DATA from '../../shop-data2';

const Home = () => {
  const userName = JSON.parse(localStorage.getItem('user'));
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <div>
      <h1 className="welcome-title">Welcome, {userName.name}</h1>
      <CategoryContainer key={categories.id} categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
