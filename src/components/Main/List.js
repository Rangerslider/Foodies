//import React from 'react';
//import '../../App.css';
// import Prices from '../Prices';
// import Footer from '../Footer';

// function List() {
//   return (
//     <>
//       <Prices />
//       <Footer />
//     </>
    
//   );
// }

// export default List;
import React, { useState } from "react";
import Packages from "./Packages";
import Categories from "./Categories";
import items from "./data";
import './style.css'


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () => {
  const [packagesItems, setPackagesItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setPackagesItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setPackagesItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Packages items={packagesItems} />
        

      </section>
    </main>

  );
};

export default Home;
