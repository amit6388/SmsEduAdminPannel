import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const StudentQueries = () => {
  const [query, setQuery] = useState();
  return (
    <>
      <section className=" p-5 sm:p-5 lg:p-10 mt-5">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start mt-10 mb-10">
          Queries
        </h2>

        <div className="my-5">
          <table className="table-auto w-full">
            <thead className="border-b border-b-gray-600  text-[var(--secondary-color)]">
              <tr className="uppercase text-start">
                <th className="px-0 py-3 text-start ">Sr. No.</th>
                <th className="px-3 py-3 text-start">Query</th>
                <th className="px-3 py-3 text-start hidden md:table-cell">
                  Date
                </th>
                <th className="px-3 py-3 text-start table-cell">Status</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="px-0 py-5 text-sm">1.</td>
                <td className="px-3 py-5 text-sm max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, rem soluta. Veritatis cum sit dolore! Animi
                  necessitatibus distinctio qui quas?
                </td>
                <td className="px-3 py-5 hidden lg:table-cell ">10/04/2023</td>
                <td className="px-3 py-5  text-sm">
                  <div className="text-teal-500 py-1">Solved</div>
                  <p className="max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro vel praesentium fuga necessitatibus nihil nostrum
                    adipisci fugit facere sit soluta.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-0 py-5 text-sm">2.</td>
                <td className="px-3 py-5 text-sm max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, rem soluta. Veritatis cum sit dolore! Animi
                  necessitatibus distinctio qui quas?
                </td>
                <td className="px-3 py-5 hidden lg:table-cell ">10/04/2023</td>
                <td className="px-3 py-5  text-sm">
                  <div className="text-red-500 py-1">Pending</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* New Query */}
        <form>
          <div className="flex flex-col mx-3 mb-6 mt-10">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="query"
              >
                New Query
              </label>
              <textarea
                rows={10}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="query"
                type="text"
                placeholder="Query...."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            <Button variant="gradient" color="blue" className="h-fit w-fit">
              <span>Submit</span>
            </Button>
          </div>
        </form>

        {/*  New Heading */}
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start mt-20 mb-10">
          FeedBack
        </h2>
        {/* Feed Back */}
        <form>
          <div className="flex flex-col mx-3 mb-6 mt-10">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <textarea
                rows={10}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="feedback"
                placeholder="Your Message Here...."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            <Button variant="gradient" color="blue" className="h-fit w-fit">
              <span>Submit</span>
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default StudentQueries;
