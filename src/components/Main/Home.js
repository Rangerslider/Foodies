// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import About from "./components/About";
// import Shop from "./components/Shop";
// import Menu from "./components/Menu";
// import Clients from "./components/Clients";
// import Prices from "./components/Prices";
// import Footer from "./components/Footer";
import '../../App.css';
import React from 'react';
import Header from '../Header';
import About from '../About';
import Shop from '../Shop';
import Menu from '../Menu';
import Clients from '../Clients';
import Prices from '../Prices';
import Footer from '../Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;



