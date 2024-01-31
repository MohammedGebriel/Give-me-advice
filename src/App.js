import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios'

function App() {
  const [num,setNum] = useState(0);
  const [advice,setAdvice] = useState('')
  useEffect(()=>{
    // axios.get('https://api.adviceslip.com/advice')
    // .then((response)=> {
    //   setAdvice(response.data.slip.advice)
    // })
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(response => setAdvice(response.slip.advice))
    
  },[num])
  return (
    <div className="app">
      <div className='card'>
        <h1 className='heading'>
          {advice}
        </h1>
        <button className='button'  onClick={()=>{setNum(prev => prev + 1)}}>
          <span>
            GIVE ME ADVICE!
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
