import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginatedItems = ({ itemsPerPage, onChangePage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = React.useState(null);
  const [pageCount, setPageCount] = React.useState(3);
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
  const handlePageClick = (event) => {
    onChangePage(event.selected + 1);
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    // setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginatedItems;
