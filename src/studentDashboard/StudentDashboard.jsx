import React from "react";
import AI from "../assets/images/artificial-intelligence.jpg";

const StudentDashboard = () => {
  return (
    <>
      <section className=" p-5 sm:p-5 lg:p-10 mt-5">
        <div className="flex justify-around flex-wrap">
          <div className="m-3 flex items-center w-fit p-5 rounded-lg shadow-xl hover:-translate-y-2 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-12 h-12 mr-3 text-[var(--theme-color)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <div className="">
              <div className="text-[var(--theme-color)] text-3xl">06</div>
              <div className="text-[var(--secondary-color)] font-semibold">
                Total Courses
              </div>
            </div>
          </div>
          <div className="m-3 flex items-center w-fit p-5 rounded-lg shadow-xl hover:-translate-y-2 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-12 h-12 mr-3 text-[var(--theme-color)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            <div className="">
              <div className="text-[var(--theme-color)] text-3xl">02</div>
              <div className="text-[var(--secondary-color)] font-semibold">
                Active Courses
              </div>
            </div>
          </div>
          <div className="m-3 flex items-center w-fit p-5 rounded-lg shadow-xl hover:-translate-y-2 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-12 h-12 mr-3 text-[var(--theme-color)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            <div className="">
              <div className="text-[var(--theme-color)] text-3xl">06</div>
              <div className="text-[var(--secondary-color)] font-semibold">
                Completed Courses
              </div>
            </div>
          </div>
        </div>

        {/* Heeading */}
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start my-20">
          Scheduled Classes
        </h2>
        {/* Scheduled Classes */}
        <div>
          {/* Schedule - 1 */}
          <div className=" flex flex-col md:flex-row items-center justify-around my-10">
            <div className="flex flex-col items-center ">
              <div className="text-6xl text-[var(--theme-color)] font-bold">
                15
              </div>
              <div className="text-[var(--secondary-color)] text-xl font-semibold">
                October
              </div>
            </div>
            <div className="px-3 flex flex-col max-w-md">
              <h4 className="text-2xl font-semibold my-5 text-[var(--secondary-color)]">
                Lec - 1 Introduction to Artificial Intelligence
              </h4>
              <div className="flex space-x-5">
                <div className="flex my-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-[var(--secondary-color)]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div>31 May 2023</div>
                </div>
                {/* Duration */}
                <div className="flex my-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-[var(--secondary-color)]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>10:00 PM</div>
                </div>
              </div>
              <p className="my-2 text-[var(--para-color)]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam dolorem vitae architecto itaque soluta quae mollitia
                aliquid aspernatur molestiae magni.
              </p>
            </div>
            <div>
              <img src={AI} className="w-64 h-40 rounded-lg" alt="" />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row items-center justify-around my-10">
            <div className="flex flex-col items-center ">
              <div className="text-6xl text-[var(--theme-color)] font-bold">
                15
              </div>
              <div className="text-[var(--secondary-color)] text-xl font-semibold">
                October
              </div>
            </div>
            <div className="px-3 flex flex-col max-w-md">
              <h4 className="text-2xl font-semibold my-5 text-[var(--secondary-color)]">
                Lec - 1 Introduction to Artificial Intelligence
              </h4>
              <div className="flex space-x-5">
                <div className="flex my-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-[var(--secondary-color)]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div>31 May 2023</div>
                </div>
                {/* Duration */}
                <div className="flex my-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-[var(--secondary-color)]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>10:00 PM</div>
                </div>
              </div>
              <p className="my-2 text-[var(--para-color)]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam dolorem vitae architecto itaque soluta quae mollitia
                aliquid aspernatur molestiae magni.
              </p>
            </div>
            <div>
              <img src={AI} className="w-64 h-40 rounded-lg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
