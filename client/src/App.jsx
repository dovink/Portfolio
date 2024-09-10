import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import "./index.css";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Project from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Game from "./components/Game/Game";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Project />
      <Contact />
      <Game />
    </>
  );
};

export default App;
