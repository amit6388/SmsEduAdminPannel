import React from "react";
import man from "../../assets/images/man.jpg";
import ccc from "../../assets/images/CCC.png";
import adca from "../../assets/images/ADCA-course.jpg";
import Olevel from "../../assets/images/o-level.jpg";
import { useNavigate } from "react-router-dom";

const StudentAcademics = () => {
  const navigate = useNavigate();

  const coursedetails = () => {
    navigate("/student/academic/course-contents");
  };
  return (
    <>
      <section className=" p-2 sm:p-5 md:p-10 ">
        <div className="flex flex-row justify-around flex-wrap">
          {/* CCC */}
          <div
            onClick={coursedetails}
            className="w-64 m-3 rounded-lg border shadow-xl  flex flex-col justify-center text-center items-center hover:-translate-y-4 transition cursor-pointer"
          >
            <img
              src={ccc}
              className="h-40 w-full rounded-tr-lg rounded-tl-lg"
              alt=""
            />
            <div className="py-5 px-5 flex flex-col justify-center items-center flex-grow">
              <h5 className="text-lg font-bold ">
                Course on Computer Concepts
              </h5>
              <p className="text-xs flex items-center my-2">
                <img src={man} className="h-5 w-5 rounded-full mx-2" alt="" />
                Jesús Alexander
              </p>
            </div>
          </div>
          {/* ADCA */}
          <div
            onClick={coursedetails}
            className="w-64 m-3 rounded-lg border shadow-xl  flex flex-col justify-center text-center items-center hover:-translate-y-4 transition cursor-pointer"
          >
            <img
              src={adca}
              className="h-40 w-full rounded-tr-lg rounded-tl-lg"
              alt=""
            />
            <div className="py-5 px-5 flex flex-col justify-center items-center flex-grow">
              <h5 className="text-lg font-bold ">
                Advanced Diploma in Computer Application
              </h5>
              <p className="text-xs flex items-center my-2">
                <img src={man} className="h-5 w-5 rounded-full mx-2" alt="" />
                Jesús Alexander
              </p>
            </div>
          </div>
          {/* Olevel */}
          <div
            onClick={coursedetails}
            className="w-64 m-3 rounded-lg border shadow-xl  flex flex-col justify-center text-center items-center hover:-translate-y-4 transition cursor-pointer"
          >
            <img
              src={Olevel}
              className="h-40 w-full rounded-tr-lg rounded-tl-lg"
              alt=""
            />
            <div className="py-5 px-5 flex flex-col justify-center items-center flex-grow">
              <h5 className="text-lg font-bold ">O Level</h5>
              <p className="text-xs flex items-center my-2">
                <img src={man} className="h-5 w-5 rounded-full mx-2" alt="" />
                Jesús Alexander
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentAcademics;
