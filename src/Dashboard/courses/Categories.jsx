import React, { useEffect, Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
import baseurl from "../../Config";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import ModalAddCategory from "./ModalAddCategory";
import ModalEditCategory from "./ModalEditCategory";

const Categories = () => {
  const [product, setProduct] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(baseurl + "/api/students ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProduct(result);
        console.log(result);
      })
      .catch((err) => {
        let a = 10;
        console.log(err);
      });
  }, [page]);

  // const getProduct = async () => {
  //   let result = await fetch(baseurl + "/api/students");
  //   result = await result.json();
  //   setProduct(result);
  //   console.log(result);
  // };
  // console.log(product);

  const deleteData = async (id) => {
    //console.warn(id)
    var result = fetch(baseurl + `/api/students/${id}`, {
      method: "DELETE",
    });
    alert("Are You Sure To Delete Data...?");
    result = await result.json();
  };

  // getProduct();

  //handle Next
  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
  };
  //handlePrevious
  const handlePrevious = () => {
    if (page === 1) return page;
    setPage(page - 1);
  };
  //console.log(pageCount)

  useEffect(() => {
    const pagedatacount = Math.ceil(product.length / 5);
    setPageCount(pagedatacount);

    if (page) {
      const LIMIT = 5;
      const skip = LIMIT * page;
      const dataskip = product.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataskip);
    }
  }, [product]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);

  return (
    <div>
      <div className="p-5 ml-auto shadow-lg  h-[100vh] overflow-y-scroll scrollbar-hide bg-[#f5f6fa]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--secondary-color)] text-center sm:text-start ">
            Course Category
            <div className="text-sm font-light text-[var(--para-color)]">
              You have total 2 Course Categories
            </div>
          </h2>
          {/* Students */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className=" w-48 mx-2">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="textarea"
                  className="relative m-0 block w-[1%] min-w-0 pl-2 pr-8 py-2  flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-[var(--theme-color)] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                  placeholder="Search by name"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
                <div
                  className=" absolute bottom-1 right-1 input-group-text flex items-center whitespace-nowrap rounded px-1 py-1.5 text-center text-base font-normal text-neutral-700  cursor-pointer"
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Button onClick={handleOpen} className="h-fit">
              + Add Category
            </Button>
          </div>
        </div>
        <ModalAddCategory open={open} handleOpen={handleOpen} />

        {/* Student Table */}
        <div className="my-10">
          <div className="">
            {/* Category Boxes */}
            <div className="flex">
              {/* Category-1 */}
              <div className=" w-64 border border-blue-500 p-2 m-2 rounded-lg">
                <div className="flex justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="py-2 px-3 bg-[#9d72ff] rounded-lg w-fit h-fit text-white">
                      N
                    </div>
                    <div>
                      <h6 className="font-bold text-xl">Networking</h6>
                      <span className="text-[var(--dash-text-color)] text-sm">
                        3 SubCategories
                      </span>
                    </div>
                  </div>
                  {/* Icon */}
                  <div>
                    <Menu>
                      <MenuHandler>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </MenuHandler>
                      <MenuList className="p-0">
                        <MenuItem>
                          <div className="flex " onClick={handleOpen2}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 mx-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              />
                            </svg>
                            Edit Category
                          </div>
                        </MenuItem>

                        <MenuItem>
                          <div className="flex " onClick={deleteData}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 mx-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            Delete Category
                          </div>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                    <ModalEditCategory open={open2} handleOpen={handleOpen2} />
                  </div>
                </div>
                <p className="font-extralight text-sm mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores dignissimos eligendi.
                </p>

                <div className="text-xs flex justify-around flex-wrap">
                  <div className="text-[#854fff] m-2">CCNA</div>

                  <div className="text-[#e85347] m-2">ADCA</div>
                  <div className="text-[#09c2de] m-2">CCC</div>
                  <div className="text-[#f4bd0e] m-2">O Level</div>
                  <div className="text-[#364a63] m-2">Python</div>
                </div>
              </div>
            </div>
            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination flex space-x-5 border w-fit px-2 py-1 mx-5 mt-5">
                  <li className="page-item">
                    <a
                      className="page-link"
                      sty
                      href="#"
                      aria-label="Previous"
                      onClick={handlePrevious}
                      disabled={page === 1}
                    >
                      <span
                        aria-hidden="true"
                        className="border px-2 py-1 shadow-xl rounded-lg"
                      >
                        &laquo;
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  {Array(pageCount)
                    .fill(null)
                    .map((ele, index) => {
                      return (
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            active={page === index + 1 ? true : false}
                            onClick={() => {
                              setPage(index + 1);
                            }}
                          >
                            {index + 1}
                          </a>
                        </li>
                      );
                    })}
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={handleNext}
                      disabled={page === pageCount}
                    >
                      <span
                        aria-hidden="true"
                        className="border px-2 py-1 shadow-xl rounded-lg"
                      >
                        &raquo;
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
