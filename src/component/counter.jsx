
import React from 'react'
import { useSelector} from 'react-redux'



function Counter() {
  const State = useSelector(state => state.Num)

  return (
    <>
        <h2>{State}</h2>
    </>
  )
}

export default Counter