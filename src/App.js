import React, { useState, useEffect } from "react";
import "./styles.css";
import Card1 from "./Card1";
import Contact from "./contactInfo";
import Cube1 from "./Cube1";
import Card2 from './Card2'


function App() {
  const [, setPos] = useState(window.pageYOffset); 

  useEffect(() => {
    const handleScroll = () => {
      setPos(window.pageYOffset); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="outer-container">
      <Card1 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.70)} />
      <Cube1 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.70)} />
      <Card2 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.70)} /> 
    </div>
    <Contact /> 
    </>
  );
}

export default App;