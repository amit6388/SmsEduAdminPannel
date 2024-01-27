import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import baseurl from "../../Config";

const AddExpense = ({ open, handleOpen }) => {
  const [expenseHead, setExpenseHead] = useState("");
  const [name, setName] = useState("");
  const [invoiceno, setInvoiceno] = useState("");
  const [date, setDate] = useState("");
  const [amt, setAmt] = useState("");
  const [doc, setDoc] = useState([]);
  const [desc, setDesc] = useState("");

  const data = {
    name,
  };

  console.log(data);

  const onSubmitClick = () => {
    // Post Api For Posting Data
    fetch(baseurl + "/api/students", {
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
          alert("Student Added Successfully");
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
      <Dialog open={open} handler={handleOpen} size="sm">
        <DialogHeader className="text-center justify-center">
          {" "}
          Add Expense
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* Expense Head */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="expenseHead"
                >
                  Expense Head
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="expenseHead"
                  type="text"
                  placeholder="Electricity"
                  value={expenseHead}
                  onChange={(e) => {
                    setExpenseHead(e.target.value);
                  }}
                />
              </div>
              {/* Name */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Fun Fest"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/* Invoice Number */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="invoiceno"
                >
                  Invoice Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="invoiceno"
                  type="number"
                  placeholder="632612"
                  value={invoiceno}
                  onChange={(e) => {
                    setInvoiceno(e.target.value);
                  }}
                />
              </div>
              {/* Date */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              {/* Amount */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="amount"
                  type="number"
                  placeholder="2000"
                  value={amt}
                  onChange={(e) => {
                    setAmt(e.target.value);
                  }}
                />
              </div>
              {/* Amount */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="doc"
                >
                  Attach Document
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="doc"
                  type="file"
                  placeholder="2000"
                  value={doc}
                  onChange={(e) => {
                    setDoc(e.target.files[0]);
                  }}
                />
              </div>
              {/* Description */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="desc"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="desc"
                  type="text"
                  placeholder="Description"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={onSubmitClick}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddExpense;
