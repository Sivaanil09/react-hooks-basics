import React from 'react';
import { useEffect, useState, useContext } from 'react';
import './App.css';

function App() {

  let [info, setInfo] = useState({
    age: 20,
    sibling: 2,
  }
  )

  let changeAge = () => {
    setInfo(prev => {
      return { ...prev, age: prev.age + 1 }
    })
  }

  let changeSib = () => {
    setInfo(prev => {
      return {
        ...prev, sibling: prev.sibling + 1
      }
    }
    )
  }

  let [count, setCount] = useState(0)

  let reset = () => {
    setCount(0)
  }

  let increment = () => {
    setCount(count + 1)
  }

  let decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    document.title = "You are " + info.age + " years old."
  })

  const ThemeContext = React.createContext('dark')
  
  let display = () => {
    const theme = "dark"
    return <div style ={{
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
            width: '100%',
            minHeight: '200px'
    }}>
      <h2>The theme here is {theme}.</h2>
  </div>
  }

  return <>
    <h2>Today I am {info.age} years old.</h2>
    <h2>I have {info.sibling} siblings.</h2>

    <span>
      <button onClick={changeAge}>Get older!</button>
      <button onClick={changeSib}>More Siblings!</button>
    </span>
    <br /><br /><br /><br />

    <h2>Count value is: {count}</h2>
    <span>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </span>
    <br /><br /><br /><br />

    <button onClick={useEffect}>Change Title</button>
    <br /><br /><br /><br />
    {display()}
  </>
}

export default App;
