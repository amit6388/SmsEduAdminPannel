import React, { useEffect, useState } from "react";
import { Radio, Button } from "@material-tailwind/react";
import baseurl from "../../Config";
import { useLocation, useNavigate } from "react-router-dom";

const EditInstructor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [degree, setDegree] = useState("");
  const [exp, setExp] = useState("");
  const [contact, setContact] = useState("");
  const location = useLocation();
  const instData = location.state;
  console.log(instData);

  const navigate = useNavigate();

  useEffect(() => {
    setName(instData.name);
    setEmail(instData.email);
    setAddress(instData.address);
    setGender(instData.gender);
    setDob(instData.dob);
    setQualification(instData.qualification);
    setDegree(instData.degree);
    setExp(instData.exp);
    setContact(instData.contact);
  }, [instData]);

  const onSubmitClick = () => {
    // Empty the value of fields
    setName("");
    setEmail("");
    setAddress("");
    setGender("");
    setDob("");
    setQualification("");
    setDegree("");
    setExp("");
    setContact("");

    const updatedData = {
      name,
      email,
      address,
      gender,
      dob,
      qualification,
      degree,
      exp,
      contact,
    };

    // Post Api For Posting Data
    fetch(baseurl + "/api/instructor/" + instData.contact, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Updated Successfully");
        navigate("/admin/instructorList");
      });
  };
  return (
    <>
      <div className=" max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto p-5">
        <h2 className="text-3xl text-center font-bold my-5">Edit Instructor</h2>
        <div className="w-[80%] md:px-5 lg:px-10 mx-auto mt-20">
          <form className="w-full px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="john@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  placeholder="7th Street, Mexico, USA"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className="flex gap-10">
                  <Radio
                    id="male"
                    name="type"
                    label="Male"
                    value={gender}
                    onChange={(e) => {
                      setGender("male");
                    }}
                  />
                  <Radio
                    id="female"
                    name="type"
                    label="Female"
                    value={gender}
                    onChange={(e) => {
                      setGender("female");
                    }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="dob"
                >
                  Date Of Birth
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  qualification{" "}
                  <span className="text-xs mx-1 text-gray-500 lowercase font-light">
                    (seperated by comma)
                  </span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="qualification"
                  type="text"
                  placeholder="B.Tech, MCA"
                  value={qualification}
                  onChange={(e) => {
                    setQualification(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="degree"
                >
                  Highest Degree
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="degree"
                  type="text"
                  placeholder="MCA"
                  value={degree}
                  onChange={(e) => {
                    setDegree(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="exp"
                >
                  Experience
                  <span className="text-xs mx-1 text-gray-500 lowercase font-light">
                    (in years)
                  </span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="exp"
                  type="number"
                  placeholder="2.5"
                  value={exp}
                  onChange={(e) => {
                    setExp(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
          <Button onClick={onSubmitClick}>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default EditInstructor;
