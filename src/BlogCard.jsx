import React, { useState } from "react";
import "./App.css";
export default function BlogCard({
  blogTitle,
  blogContent,
  category,
  tags,
  url,
}) {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[370px]  bg-[#1E2939] rounded-2xl relative font-semibold text-white p-2 lg:p-3 xl:p-4 gap-3 flex flex-col">
      <img src={url} alt="blog-image" className="rounded-2xl h-275px " />
      <span className="category absolute right-6 top-6 text-sm px-2 py-1 bg-[#AD46FF] rounded-2xl">
        {category === "Select your category" ? "not available" : category}
      </span>
      <span className="blog-title line-clamp-2">
        <span className="font-bold text-yellow-400 mr-1 ">star</span>
        <span className="">{blogTitle}</span>
      </span>
      <span className="blog-content text-[#99A1AF] line-clamp-3">{blogContent}</span>
      <svg
        onClick={() => {
          setLike(!like);
          console.log("like status : ", like);
        }}
        // className={like ? "likedSvg" : "unlikedSvg"}
        width="2rem"
        fill={like ? "red" : "none"}
        stroke={like ? "red" : "#99A1AF"}
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
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
}
