import React from 'react'
import { useDispatch } from 'react-redux'
import { Decrement } from '../state/actions/action'

function Minus() {
    const Dispatch = useDispatch()
    return (
        <>
            <button onClick={() => { Dispatch(Decrement()) }}>-</button>
        </>
    )
}

export default Minus