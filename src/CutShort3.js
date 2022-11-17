import React from "react";
import { useNavigate } from "react-router-dom";

const CutShort3 = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/third")
    }
  return (
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
                  <div class="h-full  bg-[#664de5]  w-full"></div>
                </div>
              </div>
              <div class="w-full flex items-center ">
                <div class="relative flex flex-col items-center text-teal-600">
                  <div class="rounded-full transition duration-400 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3 bg-[#664de5] text-white border-[#664de5]">
                    3
                  </div>
                </div>
                <div class="flex-auto w-full  transition duration-400 ease-in-out bg-gray-400 h-[1.6px] ">
                  <div class="h-full  bg-[#664de5] w-2/4 w-full"></div>
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
              How are you Planning to use...
            </h1>
            <p class="text-[#6f7b92] font-normal">
              We'll streamline your setup experience.
            </p>
          </section>
          <form class="space-y-4">
            <div class="form-control flex justify-between space-x-7">
              <div class="border p-4  rounded overflow-hidden  w-full cursor-pointer border-[#664de5]">
                <div class="w-full ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-xl text-[#664de5]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"></path>
                  </svg>
                </div>
                <h2 class="mt-2 font-bold text-sm text-[#474f5f]">
                  For myself
                </h2>
                <p class="mt-2 h-full w-full  text-left text-sm font-medium text-[#8c95a8]">
                  Write Better. Think more clearly.Stay organized.
                </p>
              </div>
              <div class="border p-4  rounded overflow-hidden  w-full cursor-pointer hover:border-[#664de5]">
                <div class="w-full ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-xl "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"></path>
                    </g>
                  </svg>
                </div>
                <h2 class="mt-2 font-bold text-sm text-[#474f5f]">
                  With my team
                </h2>
                <p class="mt-2   text-left text-sm  font-medium text-[#8c95a8]">
                  Wikis,docs,task &amp; projects,all in one place.
                </p>
              </div>
            </div>
          </form>
          <div class="container flex  justify-center mt-4 mb-8">
            <button
              type="button"
              onClick={handleClick}
              class="w-full py-3 px-4 rounded-md bg-[#664de5] text-white text-sm font-medium cursor-pointer  hover:bg-[#7e65fb] hover:text-white transition duration-200"
            >
              Create Workspace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutShort3;