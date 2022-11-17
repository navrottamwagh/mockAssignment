import React from "react";
import "./App.css";
const CutShort4 = () => {
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
                  <div class="h-full  bg-[#664de5]  w-full"></div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="relative flex flex-col items-center text-teal-600">
                  <div class="rounded-full transition duration-400 ease-in-out border-2 border-gray-300 h-9 w-9 flex items-center justify-center py-3 bg-[#664de5] text-white border-[#664de5]">
                    4
                  </div>
                </div>
                <div class="flex-auto w-full  transition duration-400 ease-in-out bg-gray-400 h-[1.6px] ">
                  <div class="h-full  bg-[#664de5] w-2/4 w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-2 flex justify-center items-center text-[#664de5] text-6xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
            </svg>
          </div>
          <section class="flex justify-center items-center flex-col gap-y-2">
            <h1 class="text-2xl font-bold text-[#151b28] text-center">
              Congrtulations, Narottam!
            </h1>
            <p class="text-[#6f7b92] font-normal">
              {" "}
              We'll streamline your setup experience.{" "}
            </p>
          </section>
          <div class="container flex  justify-center mt-4 mb-8">
            <button
              type="button"
              class="w-full py-3 px-4 rounded-md bg-[#664de5] text-white text-sm font-medium cursor-pointer  hover:bg-[#7e65fb] hover:text-white transition duration-200"
            >
              Launch Eden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CutShort4;