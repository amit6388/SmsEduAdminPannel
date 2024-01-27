import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import baseurl from "../../Config";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("no cat");
  const [level, setLevel] = useState("");
  const [lesson, setLesson] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState("");

  const data = {
    title,
    cat,
    level,
    lesson,
    thumbnail,
    desc,
    status,
    price,
    deadline,
  };

  console.log(data);

  const onSubmitClick = () => {
    // Empty the value of fields
    setTitle("");
    setCat("");
    setLevel("");
    setLesson("");
    setThumbnail("");
    setDesc("");
    setStatus("");
    setPrice("");
    setDeadline("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/courses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.status === true && result.code === 200) {
          alert("Courses Added Successfully");
        } else {
          alert(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto p-2 md:p-3 lg:p-5">
        <h2 className="text-3xl text-center font-bold my-5">Add Course</h2>
        <div className="w-[80%] md:px-5 lg:px-10 mx-auto mt-20">
          <form className="w-full px-2 md:px-5 lg:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div> */}
              {/* Course Name */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course-name"
                >
                  Course Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="course-name"
                  type="text"
                  placeholder="e.g., CCC"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              {/* Category */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="category"
                >
                  Course Category
                </label>
                <Select
                  id="category"
                  label="Select Category"
                  value={cat}
                  onChange={(e) => {
                    setCat(e.target.value);
                  }}
                >
                  <Option value={"Web Development"}>Web Development</Option>
                  <Option value={"Mobile Application"}>
                    Mobile Application
                  </Option>
                  <Option value={"Graphics Design"}>Graphics Design</Option>
                </Select>
              </div>
              {/* Course Level */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="level"
                >
                  Course Level
                </label>
                <Select
                  id="level"
                  label="Select Category"
                  value={level}
                  onChange={(e) => {
                    setLevel(e.target.value);
                  }}
                >
                  <Option value="Beginners">Beginners</Option>
                  <Option value="Intermediate">Intermediate</Option>
                  <Option value="Advanced">Advanced</Option>
                </Select>
              </div>
              {/* Total Lessons */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson"
                >
                  Total Lessons
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lesson"
                  type="number"
                  placeholder="9"
                  value={lesson}
                  onChange={(e) => {
                    setLesson(e.target.value);
                  }}
                />
              </div>
              {/* Thumbnail */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="thumbnail"
                >
                  Course Thumbnail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="thumbnail"
                  type="file"
                  value={thumbnail}
                  onChange={(e) => {
                    setThumbnail(e.target.files[0]);
                  }}
                />
              </div>
              {/* Total Description */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson"
                >
                  Course Description
                </label>
                <Textarea
                  resize={true}
                  label="Message"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              {/* Status */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson"
                >
                  Status
                </label>
                <div className="flex gap-10">
                  <Radio
                    id="Active"
                    name="type"
                    label="Active"
                    value="Active"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <Radio
                    id="Pending"
                    name="type"
                    label="Pending"
                    value="Pending"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <Radio
                    id="Rejected"
                    name="type"
                    label="Rejected"
                    value="Rejected"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* Total Lessons */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Course Price
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price"
                  type="number"
                  placeholder="200"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="deadline"
                >
                  Deadline
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="deadline"
                  type="date"
                  value={deadline}
                  onChange={(e) => {
                    setDeadline(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <Button onClick={onSubmitClick}>Save</Button>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
