import React, { useEffect, Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import baseurl from "../../Config";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AddExpense from "./AddExpense";

const Expenses = () => {
  const [product, setProduct] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch(baseurl + "/api/students ", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((result) => {
  //       setProduct(result);
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       let a = 10;
  //       console.log(err);
  //     });
  // }, [page]);

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

  return (
    <div>
      <div className="p-5 ml-auto shadow-lg  h-[100vh] overflow-y-scroll scrollbar-hide bg-[#f5f6fa]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--secondary-color)] ">
            Expenses
          </h2>
          {/* Students */}
          <div className="flex items-center">
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
              + Add
            </Button>
          </div>
        </div>
        <AddExpense open={open} handleOpen={handleOpen} />

        {/* Student Table */}
        <div className="my-10">
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-md text-[var(--secondary-color)] uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className=" py-3">
                    <Checkbox />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Invoice Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Expense Head
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-1 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Dummy Data Starts here */}
                <tr class="bg-white border-b">
                  <td class=" py-4">
                    <Checkbox />
                  </td>
                  <th scope="row" class="px-6 py-4 font-semibold text-black">
                    School Events
                  </th>
                  <td class="px-6 py-4 max-w-xs">
                    the worker should wear disposable rubber boots, gloves
                    (heavy duty), and a triple layer mask.
                  </td>
                  <td class="px-6 py-4">2311</td>
                  <td class="px-6 py-4">05/31/2023</td>
                  <td class="px-3 py-4">Miscellaneous</td>
                  <td class="px-3 py-4">RS. 1500.00</td>
                  <td class="px-1 py-4">
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
                        <MenuList>
                          <MenuItem>
                            <Link to="/admin/editStudent" className="flex ">
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
                              Edit
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex " onClick={deleteData}>
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
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              Delete
                            </div>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class=" py-4">
                    <Checkbox />
                  </td>
                  <th scope="row" class="px-6 py-4 font-semibold text-black">
                    New Books
                  </th>
                  <td class="px-6 py-4 max-w-xs">
                    the worker should wear disposable rubber boots, gloves
                    (heavy duty), and a triple layer mask.
                  </td>
                  <td class="px-6 py-4">2311</td>
                  <td class="px-6 py-4">05/31/2023</td>
                  <td class="px-3 py-4">Miscellaneous</td>
                  <td class="px-3 py-4">RS. 1500.00</td>
                  <td class="px-1 py-4">
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
                        <MenuList>
                          <MenuItem>
                            <Link to="/admin/editStudent" className="flex ">
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
                              Edit
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex " onClick={deleteData}>
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
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              Delete
                            </div>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class=" py-4">
                    <Checkbox />
                  </td>
                  <th scope="row" class="px-6 py-4 font-semibold text-black">
                    Power Center Bill
                  </th>
                  <td class="px-6 py-4 max-w-xs">
                    the worker should wear disposable rubber boots, gloves
                    (heavy duty), and a triple layer mask.
                  </td>
                  <td class="px-6 py-4">2311</td>
                  <td class="px-6 py-4">05/31/2023</td>
                  <td class="px-3 py-4">Miscellaneous</td>
                  <td class="px-3 py-4">RS. 1500.00</td>
                  <td class="px-1 py-4">
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
                        <MenuList>
                          <MenuItem>
                            <Link to="/admin/editStudent" className="flex ">
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
                              Edit
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex " onClick={deleteData}>
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
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              Delete
                            </div>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class=" py-4">
                    <Checkbox />
                  </td>
                  <th scope="row" class="px-6 py-4 font-semibold text-black">
                    New Academic Session
                  </th>
                  <td class="px-6 py-4 max-w-xs">
                    the worker should wear disposable rubber boots, gloves
                    (heavy duty), and a triple layer mask.
                  </td>
                  <td class="px-6 py-4">2311</td>
                  <td class="px-6 py-4">05/31/2023</td>
                  <td class="px-3 py-4">Miscellaneous</td>
                  <td class="px-3 py-4">RS. 1500.00</td>
                  <td class="px-1 py-4">
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
                        <MenuList>
                          <MenuItem>
                            <Link to="/admin/editStudent" className="flex ">
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
                              Edit
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex " onClick={deleteData}>
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
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              Delete
                            </div>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class=" py-4">
                    <Checkbox />
                  </td>
                  <th scope="row" class="px-6 py-4 font-semibold text-black">
                    BSNL Broad Band
                  </th>
                  <td class="px-6 py-4 max-w-xs">
                    the worker should wear disposable rubber boots, gloves
                    (heavy duty), and a triple layer mask.
                  </td>
                  <td class="px-6 py-4">2311</td>
                  <td class="px-6 py-4">05/31/2023</td>
                  <td class="px-3 py-4">Miscellaneous</td>
                  <td class="px-3 py-4">RS. 1500.00</td>
                  <td class="px-1 py-4">
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
                        <MenuList>
                          <MenuItem>
                            <Link to="/admin/editStudent" className="flex ">
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
                              Edit
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex " onClick={deleteData}>
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
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              Delete
                            </div>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class=" py-4">
                    <Checkbox />
                  </td>
                  <th scope="row" class="px-6 py-4 font-semibold text-black">
                    Stock Flower
                  </th>
                  <td class="px-6 py-4 max-w-xs">
                    the worker should wear disposable rubber boots, gloves
                    (heavy duty), and a triple layer mask.
                  </td>
                  <td class="px-6 py-4">2311</td>
                  <td class="px-6 py-4">05/31/2023</td>
                  <td class="px-3 py-4">Miscellaneous</td>
                  <td class="px-3 py-4">RS. 1500.00</td>
                  <td class="px-1 py-4">
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
                        <MenuList>
                          <MenuItem>
                            <Link to="/admin/editStudent" className="flex ">
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
                              Edit
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex " onClick={deleteData}>
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
                                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                />
                              </svg>
                              Delete
                            </div>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </td>
                </tr>

                {/* Dummy Data Ends Here */}
                {pageData.map((item) => {
                  if (
                    item.title
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                  ) {
                    return (
                      <tr class="bg-white border-b" key={item._id}>
                        <td class=" py-4">
                          <Checkbox />
                        </td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-semibold text-black"
                        >
                          <div>{item.name}</div>
                          <div className="font-light my-1 text-gray-500">
                            {item.email}
                          </div>
                        </th>
                        <td class="px-6 py-4">{item.fname}</td>
                        <td class="px-6 py-4">{item.address}</td>
                        <td class="px-6 py-4">{item.contact}</td>
                        <td class="px-6 py-4">{item.gender}</td>
                        <td class="px-6 py-4">{item.dob}</td>
                        <td class="px-6 py-4">{item.admdate}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
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

export default Expenses;
