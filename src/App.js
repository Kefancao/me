import React, { useState, useEffect } from "react";
import "./styles.css";
import Card1 from "./Card1";
import Contact from "./contactInfo";


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
      <Card1 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.75)} />
      <Card1 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.75)} />
      <Card1 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.75)} />
      <Card1 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.75)} />
      <Card1 opac={(Math.cos((window.pageYOffset* 2 * Math.PI)/ window.innerHeight) + 0.75)} />
    </div>
    <Contact /> 
    </>
  );
}

export default App;