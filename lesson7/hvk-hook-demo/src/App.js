import React from 'react'
import HvkUseState from './components/HvkUseState'
import HvkUseeffect from './components/HvkUseeffect'
import HvkUseConText from './components/HvkUseConText'
import './App.css'
export default function app() {
  return (
    <>
      <div classname='container border mt-3'>
        <h1 classname='text-center'>Hoàng Văn Khải - hook </h1>
        <hr/>
        <HvkUseState/>
        <hr/>
        <HvkUseeffect/>
        <hr/>
        <HvkUseConText/>
      </div>
    </>
  )
}
