import React, {useState} from 'react'
import './styles.css'
import Card1 from './Card1'

function App() {
  const [idx, setIdx] = useState(1); 
  
  const iterate = () => {
    console.log('scrolled')
  } 

  return (
    <div className="outer-container" onScroll={iterate}>
        <Card1 num = {idx}/> 
        <Card1 num = {idx}/> 
        <Card1 num = {idx}/> 
        <Card1 num = {idx}/> 
        <Card1 num = {idx}/> 
        <Card1 num = {idx}/> 
    </div>); 
}

export default App;
