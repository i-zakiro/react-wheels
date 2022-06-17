import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);

  ///////////////////////////////////////////////////////
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });
  ///////////////////////////////////////////////////////

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62a43b1747e6e400638e8143.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}&` : ''
      }sortBy=${sortType.sortProperty}&order=desc`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(sortObj) => setSortType(sortObj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => {
              return <Skeleton key={i} />;
            })
          : items.map((obj, i) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
    </div>
  );
};

export default Home;
