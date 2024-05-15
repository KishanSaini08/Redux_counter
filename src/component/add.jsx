import React from 'react'
import { useDispatch } from 'react-redux'
import { Increment } from '../state/actions/action'


function Add() {
  const Dispatch = useDispatch()

  return (
    <>
      <button onClick={() => { Dispatch(Increment()) }}>+</button>
    </>
  )
}

export default Add