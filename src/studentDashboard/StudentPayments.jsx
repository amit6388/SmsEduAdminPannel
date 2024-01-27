import React, { useEffect, useState } from "react";
import baseurl from "../Config";

const StudentPayments = ({ auth }) => {
  const [studentFees, setStudentFees] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [totalpaid, setTotalpaid] = useState([]);

  useEffect(() => {
    getStudentFees();
  }, []); function getTotalpaid() {
    let tpaid = 0;
    studentFees.map((item) => {
      tpaid = tpaid + item.paid; 
    }); 
    setTotalpaid(tpaid);
    console.log(tpaid);
  }

  const getStudentFees = () => {
    fetch(`${baseurl}/api/fee/1234`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStudentFees(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudentData();
    getTotalpaid();
  }, []);

  const getStudentData = () => {
    fetch(`${baseurl}/api/students/${auth}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStudentData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  useEffect(()=>{
    getTotalpaid()
  },getTotalpaid )
  return (
    <>
      <section className=" p-5 sm:p-5 md:p-10 mt-5">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start">
              Students Payments {totalpaid}
            </h2>

            <div>
              <div className="my-1">
                <span className="font-semibold">Total Fees :</span> 23000
              </div>
              <div className="my-1">
                <span className="font-semibold">Paid :</span>{" "}
                <span className="text-green-500 font-semibold ">11000</span>
              </div>
              <div className="my-1">
                <span className="font-semibold">Pending :</span>{" "}
                <span className="text-red-500 font-semibold ">11000</span>
              </div>
            </div>
          </div>

          <div className="my-5">
            <table className="table-auto w-full">
              <thead className="border-b border-b-gray-600  text-[var(--secondary-color)]">
                <tr className="uppercase text-start">
                  <th className="px-3 py-3 text-start ">Course</th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Purchase Date
                  </th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Total Amt.
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell">
                    Paid
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell ">
                    Pending
                  </th>
                  <th className="px-1 py-3 text-start ">Invoice</th>
                </tr>
              </thead>
              <tbody className="">
                {studentFees.map((item) => {
                  return (
                    <>
                      <tr>
                        <td className="px-3 py-5 text-sm">{item.course}</td>
                        <td className="px-3 py-5 hidden md:table-cell text-sm">
                          {item.date}
                        </td>
                        <td className="px-3 py-5 hidden lg:table-cell text-sm">
                          {item.amount}
                        </td>
                        <td className="px-3 py- hidden lg:table-cell ">
                          <span className="text-teal-500">{item.paid}</span>{" "}
                        </td>
                        <td className="px-3 py-5 hidden md:table-cell">
                          <span className="text-amber-500">
                            {item.amount - item.paid}
                          </span>
                        </td>
                        <td className="px-1 py-5 text-sm">
                          <div className="w-9 h-9 flex justify-center items-center bg-green-100 rounded-full cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
                {/* <tr>
                  <td className="px-3 py-5 text-sm">{studentFees.course}</td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm">
                    {studentFees.date}
                  </td>
                  <td className="px-3 py-5 hidden lg:table-cell text-sm">
                    {5000}
                  </td>
                  <td className="px-3 py- hidden lg:table-cell ">
                    <span className="text-teal-500">3000</span>{" "}
                  </td>
                  <td className="px-3 py-5 hidden md:table-cell">
                    <span className="text-amber-500">2000</span>
                  </td>
                  <td className="px-1 py-5 text-sm">
                    <div className="w-9 h-9 flex justify-center items-center bg-green-100 rounded-full cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentPayments;
