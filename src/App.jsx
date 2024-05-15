import React from 'react'
import Counter from './component/counter'
import Add from './component/add'
import Minus from './component/minus'
import "./App.css"

function App() {

  return (
    <>
    <h1>Counter Task</h1>
    <div className='container'>
      <Minus />
      <Counter />
      <Add />
    </div>
    </>
  )
}

export default App