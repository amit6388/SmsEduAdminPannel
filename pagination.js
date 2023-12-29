import React, { useState, useEffect } from "react";
const PaginatedListView = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
            (currentPage - 1) * itemsPerPage
          } `
        );
        const data = await response.json();
        console.log(data, "0000000000000000");
        setItems(data.products);
        setTotalItems(data.total);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const createPagination = () => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pageButtons = [];

    for (let i = 1; i <= pageCount; i++) {
      pageButtons.push(
        <button key={i} onClick={() => handlePageClick(i)}>
          {i}
        </button>
      );
    }

    return (
      <div className="pagination">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageButtons}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPageChange(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    );
  };

  return (
    <div>
      <h1>Paginated List View</h1>
      {loading && <p>Loading...</p>}
      <table>
        <thead>
          <tr>
            <th> ID</th>
            <th> Title</th>
            <th> Brand</th>
            <th> Description</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              {" "}
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.brand}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {createPagination()}
    </div>
  );
};

export default PaginatedListView;
