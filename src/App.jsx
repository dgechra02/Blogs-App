import { useState } from "react";
import "./App.css";
import Header from "./Header";
import BlogModal from "./BlogModal";
import BlogList from "./BlogList";

function App() {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [allCards, setAllCards] = useState([]);
  const [techCards, setTechCards] = useState([]);
  const [travelCards, setTravelCards] = useState([]);
  const [foodCards, setFoodCards] = useState([]);
  const [lifeStyleCards, setLifeStyleCards] = useState([]);
  const [showCards, setShowCards] = useState("All");
  const [searchedValue, setSearchedValue] = useState("");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  return (
    <div onClick={() => setHamburgerOpen(false)} className="app min-h-screen bg-[#364153] relative">
      <Header
        setShowAddBlog={setShowAddBlog}
        setShowCards={setShowCards}
        setSearchedValue={setSearchedValue}
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
      <div className="cards p-2 lg:p-4 xl:p-8  ">
        <h2 className=" text-3xl font-bold text-white mb-4 md:mb-8 flex items-center">
          <img
            className="w-12 sm:w-15"
            src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width=%27800px%27%20height=%27800px%27%20viewBox=%270%20-0.5%2025%2025%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M5.5%2012.9543C5.51239%2014.0398%205.95555%2015.076%206.73197%2015.8348C7.50838%2016.5936%208.55445%2017.0128%209.64%2017.0003H10.2L11.86%2018.7323C12.0291%2018.9036%2012.2598%2019%2012.5005%2019C12.7412%2019%2012.9719%2018.9036%2013.141%2018.7323L14.8%2017.0003H15.36C16.4456%2017.0128%2017.4916%2016.5936%2018.268%2015.8348C19.0444%2015.076%2019.4876%2014.0398%2019.5%2012.9543V8.04428C19.4731%205.7845%2017.6198%203.97417%2015.36%204.00028H9.64C7.38021%203.97417%205.5269%205.7845%205.5%208.04428V12.9543Z%27%20stroke=%27%23000000%27%20stroke-width=%271.5%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27/%3e%3cpath%20d=%27M9.5%208.25024C9.08579%208.25024%208.75%208.58603%208.75%209.00024C8.75%209.41446%209.08579%209.75024%209.5%209.75024V8.25024ZM15.5%209.75024C15.9142%209.75024%2016.25%209.41446%2016.25%209.00024C16.25%208.58603%2015.9142%208.25024%2015.5%208.25024V9.75024ZM9.5%2011.2502C9.08579%2011.2502%208.75%2011.586%208.75%2012.0002C8.75%2012.4145%209.08579%2012.7502%209.5%2012.7502V11.2502ZM15.5%2012.7502C15.9142%2012.7502%2016.25%2012.4145%2016.25%2012.0002C16.25%2011.586%2015.9142%2011.2502%2015.5%2011.2502V12.7502ZM9.5%209.75024H15.5V8.25024H9.5V9.75024ZM9.5%2012.7502H15.5V11.2502H9.5V12.7502Z%27%20fill=%27%23000000%27/%3e%3c/svg%3e"
            alt=""
          />
          <span className="mb-2 font-semibold text-2xl md:text-3xl">
            All Blogs
          </span>
        </h2>
        <div className="cardList">
          <BlogList
            showCards={showCards}
            allCards={allCards}
            techCards={techCards}
            travelCards={travelCards}
            foodCards={foodCards}
            lifeStyleCards={lifeStyleCards}
            searchedValue={searchedValue}
          />
        </div>
      </div>
      {showAddBlog ? (
          <div className="back-screen w-full h-full bg-[#00000090] z-10 flex justify-center items-center  fixed top-0">
            <BlogModal
              setShowAddBlog={setShowAddBlog}
              allCards={allCards}
              setAllCards={setAllCards}
              techCards={techCards}
              setTechCards={setTechCards}
              travelCards={travelCards}
              setTravelCards={setTravelCards}
              foodCards={foodCards}
              setFoodCards={setFoodCards}
              lifeStyleCards={lifeStyleCards}
              setLifeStyleCards={setLifeStyleCards}
            />
          </div>
      ) : null}
    </div>
  );
}

export default App;
