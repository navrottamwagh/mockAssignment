import React from "react";
import { useNavigate } from "react-router-dom";
const CutShort2 = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/second")
    }
  return (
    <div id="root">
      <div class="App h-full font-Inter  flex justify-center items-center w-full min-h-screen">
        <div class="max-w-md  pt-10 mx-auto p-7 rounded-xl w-full">
          <div class="p-3 space-y-10">
            <section class="w-auto flex justify-center items-center">
              <a href="/" class="h-6 flex justify-center items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.B3i4IinGwn1rrn1P8RLFtwHaDU?w=335&h=157&c=7&r=0&o=5&pid=1.7"
                  alt="cutShortLogo"
                  class="max-h-full"  width={"300px"} height={"300px"}
                />
              </a>
            </section>
            <div class="container horizontal mt-5">
              <div class="mx-4 py-4 flex justify-between items-center">
                <div class="w-full flex items-center ">
                  <div class="relative flex flex-col items-center text-teal-600">
                    <div class="rounded-full transition duration-400 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3 bg-[#664de5] text-white border-[#664de5]">
                      1
                    </div>
                  </div>
                  <div class="flex-auto w-full  transition duration-400 ease-in-out bg-gray-400 h-[1.6px] ">
                    <div class="h-full  bg-[#664de5]  w-full"></div>
                  </div>
                </div>
                <div class="w-full flex items-center ">
                  <div class="relative flex flex-col items-center text-teal-600">
                    <div class="rounded-full transition duration-400 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3 bg-[#664de5] text-white border-[#664de5]">
                      2
                    </div>
                  </div>
                  <div class="flex-auto w-full  transition duration-400 ease-in-out bg-gray-400 h-[1.6px] ">
                    <div class="h-full  bg-[#664de5] w-2/4 w-full"></div>
                  </div>
                </div>
                <div class="w-full flex items-center ">
                  <div class="relative flex flex-col items-center text-teal-600">
                    <div class="rounded-full transition duration-400 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3 ">
                      3
                    </div>
                  </div>
                  <div class="flex-auto w-full  transition duration-400 ease-in-out bg-gray-400 h-[1.6px] ">
                    <div class="h-full  bg-[#664de5]  w-0"></div>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="relative flex flex-col items-center text-teal-600">
                    <div class="rounded-full transition duration-400 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3 ">
                      4
                    </div>
                  </div>
                  <div class="flex-auto w-full  transition duration-400 ease-in-out bg-gray-400 h-[1.6px] ">
                    <div class="h-full  bg-[#664de5]  w-0"></div>
                  </div>
                </div>
              </div>
            </div>
            <section class="flex justify-center items-center flex-col gap-y-2">
              <h1 class="text-2xl font-bold text-[#151b28] text-center">
                Let's set up a home for all...
              </h1>
              <p class="text-[#6f7b92]">
                You can always create another workspace later.
              </p>
            </section>
            <form class="space-y-4">
              <div class="form-control space-y-1">
                <label for="name text-[#4e586c]">
                  Workspace Name
                  <input
                    id="name"
                    type="text"
                    class="input"
                    placeholder="Steve Jobs"
                  />
                </label>
              </div>
              <div class="form-control space-y-1">
                <label for="name text-[#4e586c]">
                  Workspace Name
                  <div class="flex name">
                    <span class="py-3 inline-flex items-center px-3 text-sm text-gray-500 bg-[#f8f9fc] rounded-l-md border border-r-0 ">
                      www.eden.com/
                    </span>
                    <input
                      type="text"
                      id="website-admin"
                      class="py-3 rounded-none rounded-r-lg bg-white border text-gray-500 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm  p-2.5   "
                      placeholder="Example"
                    />
                  </div>
                </label>
              </div>
            </form>
            <div class="container flex  justify-center mt-4 mb-8">
              <button
                onClick={handleClick}
                type="button"
                class="w-full py-3 px-4 rounded-md bg-[#664de5] text-white text-sm font-medium cursor-pointer  hover:bg-[#7e65fb] hover:text-white transition duration-200"
              >
                Create Workspace
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutShort2;