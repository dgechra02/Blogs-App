import React, { useState } from "react";

export default function BlogModal({
  setShowAddBlog,
  allCards,
  setAllCards,
  techCards,
  setTechCards,
  travelCards,
  setTravelCards,
  foodCards,
  setFoodCards,
  lifeStyleCards,
  setLifeStyleCards,
}) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [tags, setTags] = useState("");
  const [url, setUrl] = useState("");

  const [selectValue, setSelectValue] = useState("Select your category");

  // let's save into local storage ::::)))))

  function handleAddBlog() {
    if (
      !blogTitle.trim() ||
      !blogContent.trim() ||
      !tags.trim() ||
      !url.trim()
    ) {
      alert("Please fill all fields and upload an image.");
    } else {
      setAllCards([
        { blogTitle, blogContent, selectValue, tags, url },
        ...allCards,
      ]);
      // console.log("objjj ; ", { blogTitle, blogContent, selectValue, tags, url });
      // here these are the > blogTitle, blogContent, selectValue, tags, url > keys and value is the one that is filled using form

      if (selectValue === "technology") {
        setTechCards([
          { blogTitle, blogContent, selectValue, tags, url },
          ...techCards,
        ]);
      } else if (selectValue === "travel") {
        setTravelCards([
          { blogTitle, blogContent, selectValue, tags, url },
          ...travelCards,
        ]);
      } else if (selectValue === "food") {
        setFoodCards([
          { blogTitle, blogContent, selectValue, tags, url },
          ...foodCards,
        ]);
      } else if (selectValue === "lifeStyle") {
        setLifeStyleCards([
          { blogTitle, blogContent, selectValue, tags, url },
          ...lifeStyleCards,
        ]);
      }
      setShowAddBlog(false);
    }
  }
  function handleRemove() {
    setShowAddBlog(false);
  }
  return (
    <div className="fixed w-[330px] sm:w-[450px] h-fit px-2 py-5 sm:px-5 sm:py-5 m-2 bg-[#101828] flex flex-col gap-3.5 items-center rounded-3xl shadow-[1px_1px_5px_1px_#AD46FF]">
      <button
        onClick={handleRemove}
        className="cancleAdd absolute top-4 right-4 text-white "
      >
        <svg
          className="w-5 fill-gray-400 hover:fill-white"
          viewBox="0 -0.5 25 25"
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
            <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"></path>{" "}
          </g>
        </svg>
      </button>
      <h3 className="bg-gradient-to-r from-[#CD69E1] to-[#DF3799] bg-clip-text text-transparent font-bold text-3xl text-center flex">
        {/* <svg
          className="stroke-[#785DC8] w-10"
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
        </svg> */}
        <span> ➕ Create a Blog</span>
      </h3>
      <input
        onInput={(e) => setBlogTitle(e.target.value)}
        value={blogTitle}
        type="text"
        placeholder="Blog Title"
        className="bg-[#364153] text-gray-200 w-[95%] h-11 rounded-xl px-2"
      />
      <textarea
        onInput={(e) => setBlogContent(e.target.value)}
        value={blogContent}
        type="textarea"
        placeholder="Blog Content"
        className="bg-[#364153] text-gray-200 w-[95%] h-25 rounded-xl px-2 py-2"
      ></textarea>
      <select
        onChange={(e) => setSelectValue(e.target.value)}
        value={selectValue}
        name=""
        id="selectTag"
        className="bg-[#364153] text-gray-200 w-[95%] h-11 rounded-xl px-2"
      >
        <option value="Select your category" disabled>
          Select your category
        </option>
        <option value="technology">Technology</option>
        <option value="travel">Travel</option>
        <option value="food">Food</option>
        <option value="lifeStyle">LifeStyle</option>
      </select>
      <input
        onInput={(e) => setTags(e.target.value)}
        value={tags}
        type="text"
        placeholder="Tag (comama separated)"
        className="bg-[#364153] text-gray-200 w-[95%] h-11 rounded-xl px-2"
      />
      <input
        onInput={(e) => setUrl(e.target.value)}
        value={url}
        type="url"
        placeholder="image URL"
        className="bg-[#364153] text-gray-200 w-[95%] h-11 rounded-xl px-2"
      />
      {url.length !== 0 && (
        <img
          className="h-45 w-[95%] object-cover rounded text-white"
          src={url}
          alt="Preview"
        />
      )}
      <button
        onClick={handleAddBlog}
        type="submit"
        className="bg-red-500 text-white text-center w-[95%] h-11 rounded-xl px-2"
      >
        Create Blog
      </button>
    </div>
  );
}
