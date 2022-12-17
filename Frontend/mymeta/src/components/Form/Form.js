import React, { useState } from "react";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import { notifyError, notifyInfo, notifySuccess } from "./../Toast";

import CustomModal from "./../CustomModal";
const Form = () => {
  const [form, setForm] = useState({
    fullname: "",
    branch: "",
    email: "",
    password: "",
  });
  const [signUp, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const options = ["CSE", "CE", "IT", "EEE", "ETC", "Free Spirit"];

  const check = () => {
    console.log(form);
    if (form.fullname.length < 1) {
      throw new Error("Name length should be greater than 1");
    } else if (!options.includes(form.branch)) {
      throw new Error("Please select a valid branch");
    } else if (form.password.length < 4) {
      throw new Error("Password should have atleast 4 characters");
    } else if (form.email.length < 1) {
      throw new Error("Enter a valid email");
    } else {
      return true;
    }
  };

  const post = async () => {
    setLoading(true);
    notifyInfo("Registration Initiated");
    try {
      const options = {
        method: "post",
        url: "https://metaverseiiitbh.up.railway.app/register",
        data: form,
      };

      check();
      const res = await axios(options);
      if (res?.data?.error === "User Exists") {
        throw new Error("User Already Exists");
      }
      console.log(res);

      setSignUp(true);
      notifySuccess("Registered Successfully");
    } catch (err) {
      console.log(err);
      setErrMsg(err?.error || err?.message || "Something went wrong!");
      notifyError(err?.error || err?.message || "Something went wrong!");
    }
    setLoading(false);
  };

  // const getModal = () => {
  //   if (errMsg === "User Already Exists") {
  //     return (
  //       <CustomModal open={true}>
  //         <div
  //           style={{ width: "50vw", height: "40vh", backgroundColor: "red" }}
  //         >
  //           <h1>{errMsg}</h1>
  //         </div>
  //       </CustomModal>
  //     );
  //   }
  // };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        pauseOnHover
      />
      <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-white text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <div className="relative mb-4 text-left ">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-400"
          >
            Full Name
          </label>
          <input
            required
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) =>
              setForm((curr) => {
                return { ...curr, fullname: e.target.value };
              })
            }
          />
        </div>
        <div className="relative mb-4 text-left">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-400"
          >
            Branch
          </label>
          <select
            required
            id="branch"
            name="branch"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-grey-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={form.branch}
            onChange={(e) =>
              setForm((curr) => {
                return { ...curr, branch: e.target.value };
              })
            }
          >
            <option value="default">Select an option</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="relative mb-4 text-left">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) =>
              setForm((curr) => {
                return { ...curr, email: e.target.value };
              })
            }
          />
        </div>
        <div className="relative mb-4 text-left">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            onChange={(e) =>
              setForm((curr) => {
                return { ...curr, password: e.target.value };
              })
            }
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div>
          {" "}
          {loading ? (
            "Loading..."
          ) : (
            <button
              onClick={() => post()}
              className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Register
            </button>
          )}
        </div>

        <p className="text-xs mt-3 text-white">
          {signUp ? "Welcome to furture" : "the furture of internet awaits"}
        </p>
      </div>
    </div>
  );
};

export default Form;
