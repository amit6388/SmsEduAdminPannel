import React from "react";
import artificialIntelligence from "../../assets/images/artificial-intelligence.jpg";

const CourseContent = () => {
  return (
    <>
      <section className=" p-5 sm:p-5 lg:p-10 mt-5">
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start">
          Course Material
        </h2>
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:flex-row">
          {/* Course Video & Pdfs */}
          <div>
            <div className="max-w-sm md:max-w-lg lg:max-w-2xl mt-10 mb-20">
              <img
                src={artificialIntelligence}
                className="h-96 w-full rounded-xl"
                alt=""
              />
              <div className="px-3">
                <h4 className="text-2xl font-semibold my-5 text-[var(--secondary-color)]">
                  Lec - 1 Introduction to Artificial Intelligence
                </h4>
                <div className="flex space-x-5">
                  <div className="flex my-2">
                    {/* Instructor */}
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div>Lim teck</div>
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
                    <div>1 hrs 20 Mins</div>
                  </div>
                </div>
                <p className="my-2 text-[var(--para-color)]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam dolorem vitae architecto itaque soluta quae mollitia
                  aliquid aspernatur molestiae magni.
                </p>
              </div>
            </div>
            <div className="max-w-sm md:max-w-lg lg:max-w-2xl mt-10 mb-20">
              <img
                src={artificialIntelligence}
                className="h-96 w-full rounded-xl"
                alt=""
              />
              <div className="px-3">
                <h4 className="text-2xl font-semibold my-5 text-[var(--secondary-color)]">
                  Lec - 1 Introduction to Artificial Intelligence
                </h4>
                <div className="flex space-x-5">
                  <div className="flex my-2">
                    {/* Instructor */}
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div>Lim teck</div>
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
                    <div>1 hrs 20 Mins</div>
                  </div>
                </div>
                <p className="my-2 text-[var(--para-color)]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam dolorem vitae architecto itaque soluta quae mollitia
                  aliquid aspernatur molestiae magni.
                </p>
              </div>
            </div>
          </div>
          {/* right Content */}
          <div className="m-3 p-2 grow">
            <div>
              <div className="flex items-center border hover:shadow-lg hover:-translate-y-1 my-3 py-1 transition cursor-pointer rounded-sm">
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="text-[var(--secondary-color)] font-bold">
                  Lec-1 Introduction to Artificial Intelligence
                </span>
              </div>
              <div className="flex items-center border hover:shadow-lg hover:-translate-y-1 my-3 py-1 transition cursor-pointer rounded-sm">
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="text-[var(--secondary-color)] font-bold">
                  Lec-2 More About Artificial Intelligence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseContent;
