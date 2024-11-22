import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useIsOnline } from './hooks/useIsOnline'



function useInterval(fn, timeout){

    useEffect(() => {
      setInterval(fn, timeout);
    }, []);
}

function App() {
  
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return (
    <>
      Timer is at {count}  
    </>
  )
}


export default App
