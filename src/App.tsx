import React,{useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const handleOnclick = ()=>{
    setCount(count+ 1);
  }


  return (
    <div>
      <button onClick={handleOnclick}>{`Count is ${count}`}</button>
      <h1> Hello world<h1/>
    
    </div>
  )
}

export default App
