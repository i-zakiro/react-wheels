import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = React.useState(null);
  //const [pageCount, setPageCount] = React.useState(3);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = React.useState(0);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // React.useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(items.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(items.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
