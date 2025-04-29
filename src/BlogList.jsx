import React from "react";
import BlogCard from "./BlogCard";

export default function BlogList({
  showCards,
  allCards,
  techCards,
  travelCards,
  foodCards,
  lifeStyleCards,
  searchedValue,
}) {
  const cardsToShow = whichArrayToShow().filter((dataObj) =>
    dataObj.blogTitle.includes(searchedValue)
  );
  function whichArrayToShow() {
    if (showCards === "All") {
      return allCards;
    } else if (showCards === "Technology") {
      return techCards;
    } else if (showCards === "Travel") {
      return travelCards;
    } else if (showCards === "Food") {
      return foodCards;
    } else if (showCards === "LifeStyle") {
      return lifeStyleCards;
    }
    console.log("category : ", showCards);
  }

  return (
    <div className="  flex gap-7 flex-wrap justify-center">
      {cardsToShow.length ? (
        cardsToShow.map((data) => {
          return (
            <BlogCard
              blogTitle={data.blogTitle}
              blogContent={data.blogContent}
              category={data.selectValue}
              tags={data.tags}
              url={data.url}
            />
          );
        })
      ) : (
        <span className="w-full flex justify-center items-center text-lg sm:text-2xl md:text-2xl text-white">No blog found or Listed!!!</span>
      )}
    </div>
  );
}
