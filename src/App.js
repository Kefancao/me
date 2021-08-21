import React, {useState} from 'react'
import './styles.css'
import Card1 from './Card1'

function App() {
  const [idx, setIdx] = useState(1); 
  
  const iterate = () => {
    setIdx(old => old + 1)
  }

  return (
    <div className="scene" onScroll={iterate}>
      <Card1 num = {idx}/>
    </div>); 
}

export default App;
