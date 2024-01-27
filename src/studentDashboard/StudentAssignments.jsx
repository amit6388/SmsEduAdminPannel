import React, { useState } from "react";

const StudentAssignments = () => {
  const [uploadAssign, setUploadAssign] = useState("");
  return (
    <>
      <section className=" p-5 sm:p-5 lg:p-10 mt-5">
        {/* Heeading */}
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start my-5">
          Assignments
        </h2>

        <div className="my-10">
          <table className="table-auto w-full">
            <thead className="border-b border-b-gray-600">
              <tr className="uppercase text-start">
                <th className="px-3 py-3 text-start ">Assignment</th>
                <th className="px-3 py-3 text-start hidden md:table-cell">
                  Description
                </th>
                <th className="px-3 py-3 text-start hidden lg:table-cell">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-5 text-sm">Tic Tac Toe Program</td>
                <td className="px-3 py-5 hidden md:table-cell text-sm max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  recusandae mollitia maxime magnam sed beatae quia numquam
                  consequuntur. Eum, amet.
                </td>
                <td className="px-3 py-5 hidden lg:table-cell text-sm">
                  02/06/2023
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default StudentAssignments;
