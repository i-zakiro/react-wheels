import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/skeleton';
import PaginatedItems from '../components/Paginate';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = React.useState(1);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}&` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://62a43b1747e6e400638e8143.mockapi.io/items?${category}sortBy=${sortBy}&order=${order}${search}&limit=4&page=${currentPage}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  ///////////////////////////////////////////////////////////////////////////////////////////////

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => {
    return <Skeleton key={index} />;
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(sortObj) => setSortType(sortObj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <PaginatedItems
        itemsPerPage={4}
        items={items}
        onChangePage={(pageNum) => {
          console.log(pageNum);
          setCurrentPage(pageNum);
        }}
      />
    </div>
  );
};

export default Home;
