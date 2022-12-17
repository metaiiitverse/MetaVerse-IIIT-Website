import React, { useState } from "react";
import axios from "axios";


function HeroSection() {
  const [form, setForm] = useState({
    fullname: "",
    branch: "",
    email: "",
    password: "",
  });

  const[signUp,setSignUp]= useState(false)
  console.log(form);

  const post = async () => {
    const options = {
      method: "post",
      url: "https://metaverseiiitbh.up.railway.app/register",
      data: form,
    };

    // send the requestgit
    const res = await axios(options);
    console.log(res);
    setSignUp(true)
    
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font" style={ {backgroundImage: 
      "url('https://static.wixstatic.com/media/4c501d_131809e4210d454585b1d60dd93d1c7c~mv2.jpg/v1/fill/w_1200,h_601,al_c,q_85,enc_auto/4c501d_131809e4210d454585b1d60dd93d1c7c~mv2.jpg)",}}>
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-5xl text-white">
              Welcome to meta
            </h1>
            <p className="leading-relaxed mt-4 text-white text-2xl">
              Deep dive with us into the furture of blockchain technology
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) =>
                  setForm((curr) => {
                    return { ...curr, name: e.target.value };
                  })
                }
              />
            </div>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-400"
              >
                Branch
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) =>
                  setForm((curr) => {
                    return { ...curr, branch: e.target.value };
                  })
                }
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
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
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Password
              </label>
              <input
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
            <button
              onClick={() => post()}
              className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Register
            </button>
            <p className="text-xs mt-3 text-white">{signUp?"Welcomw to furture":"the furture of internet awaits" }</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
