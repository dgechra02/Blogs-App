import React, { useState } from "react";
// import plusIcon from './assets/plus-svgrepo-com.svg'
// this won't be able to change the color of svg
// Import SVG as a React Component
// import { ReactComponent as PlusIcon } from "./assets/plus-svgrepo-com.svg";
// this is also not suporting

import hamburger from "./assets/hamburger.svg";
import search from "./assets/search.svg";

export default function Header({
  setShowAddBlog,
  setShowCards,
  setSearchedValue,
  hamburgerOpen,
  setHamburgerOpen,
}) {
  function handleAdd() {
    setShowAddBlog(true);
  }
  function handleSearch(e) {
    setSearchedValue(e.target.value);
  }
  return (
    <div className="bg-[#101828] text-white px-2 md:px-4 lg:px-5 xl:px-15 py-3 xl:py-4 flex flex-col gap-2 md:gap-4 justify-center">
      <div className="first flex justify-between relative">
        <div className="firstPart left">
          <h1 className="text-[28px] lg:text-3xl font-bold text-[#AD46FF]">
            My Blog App
          </h1>
        </div>
        <div className=" search-bar-above hidden md:flex firstPart right items-center gap-2 xl:gap-4">
          <input
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="Search posts..."
            className="focus:outline-2 focus:outline-[#AD46FF] rounded-3xl bg-[#1E2939] border border-[#4A5565] md:w-35 lg:w-55 px-3 h-8 lg:h-9 xl:px-4 leading-none"
          />
          <button
            onClick={handleSearch}
            type="submit"
            className="font-semibold rounded-3xl bg-[#AD46FF] px-3 lg:px-4 xl:px-7 h-8 lg:h-9 cursor-pointer"
          >
            Search
          </button>
          <button
            onClick={handleAdd}
            className="rounded-xl bg-red-500 hover:bg-red-600 md:h-8 lg:h-9 px-2 xl:px-4 lg:py-1 xl:py-1.5 flex items-center gap-1 cursor-pointer"
          >
            <svg
              className="stroke-[#785DC8] md:w-5 lg:w-7"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 12H18M12 6V18"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <span className="font-bold ">Add Blog</span>
          </button>
        </div>
        <div className="add-hamburger flex md:hidden gap-1">
          <button
            onClick={handleAdd}
            className="rounded-xl bg-red-500 hover:bg-red-600 px-2 h-9 flex items-center gap-1 cursor-pointer"
          >
            <svg
              className="stroke-[#785DC8] w-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 12H18M12 6V18"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <span className="font-bold ">Blog</span>
          </button>
          <img
            onClick={(e) => {
              setHamburgerOpen(!hamburgerOpen);
              e.stopPropagation();
            }}
            className="hamburgerImg w-9 h-9 p-1 bg-[#AD46FF] rounded-xl"
            src={hamburger}
            alt=""
          />
        </div>
        {hamburgerOpen && (
          <div className="showing-all-ham-categories-col gap-2 bg-[#101828] flex flex-col p-2 rounded absolute top-11 right-2 shadow-[1px_1px_15px_1px_#AD46FF] z-10">
            <button
              value="All"
              onClick={(e) => {
                setShowCards(e.target.value);
                setHamburgerOpen(!hamburgerOpen);
              }}
              className="cursor-pointer bg-[#1E2939] px-3 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 border border-[#4A5565] rounded-2xl lg:rounded-3xl xl:rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
            >
              All
            </button>
            <button
              value="Technology"
              onClick={(e) => {
                setShowCards(e.target.value);
                setHamburgerOpen(!hamburgerOpen);
              }}
              className="bg-[#1E2939] px-3 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
            >
              Technology
            </button>
            <button
              value="Travel"
              onClick={(e) => {
                setShowCards(e.target.value);
                setHamburgerOpen(!hamburgerOpen);
              }}
              className="bg-[#1E2939] px-3 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
            >
              Travel
            </button>
            <button
              value="Food"
              onClick={(e) => {
                setShowCards(e.target.value);
                setHamburgerOpen(!hamburgerOpen);
              }}
              className="bg-[#1E2939] px-3 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
            >
              Food
            </button>
            <button
              value="LifeStyle"
              onClick={(e) => {
                setShowCards(e.target.value);
                setHamburgerOpen(!hamburgerOpen);
              }}
              className="bg-[#1E2939] px-3 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
            >
              LifeStyle
            </button>
          </div>
        )}
      </div>
      <div className="search-bar-below flex md:hidden firstPart right items-center gap-2">
        <input
          onChange={(e) => handleSearch(e)}
          type="search"
          placeholder="Search posts..."
          className="focus:outline-2 focus:outline-[#AD46FF] rounded-3xl bg-[#1E2939] border border-[#4A5565] px-3 h-9 leading-none grow"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="font-semibold rounded-3xl bg-[#AD46FF] px-3 h-9"
        >
          Search
        </button>
      </div>
      <div className="showing-all-categories-row hidden md:flex secondPart gap-2 xl:gap-5">
        <button
          value="All"
          onClick={(e) => setShowCards(e.target.value)}
          className="cursor-pointer bg-[#1E2939] px-3 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-2.5 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
        >
          All
        </button>
        <button
          value="Technology"
          onClick={(e) => setShowCards(e.target.value)}
          className="cursor-pointer bg-[#1E2939] px-3 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-2.5 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
        >
          Technology
        </button>
        <button
          value="Travel"
          onClick={(e) => setShowCards(e.target.value)}
          className="cursor-pointer bg-[#1E2939] px-3 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-2.5 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
        >
          Travel
        </button>
        <button
          value="Food"
          onClick={(e) => setShowCards(e.target.value)}
          className="cursor-pointer bg-[#1E2939] px-3 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-2.5 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
        >
          Food
        </button>
        <button
          value="LifeStyle"
          onClick={(e) => setShowCards(e.target.value)}
          className="cursor-pointer bg-[#1E2939] px-3 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-2.5 border border-[#4A5565] rounded-4xl hover:bg-[#AD46FF] focus:bg-[#AD46FF] leading-none"
        >
          LifeStyle
        </button>
      </div>
    </div>
  );
}
