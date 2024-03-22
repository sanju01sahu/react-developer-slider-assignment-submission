import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './components/Slider/Slider'
import DualSlider from './components/DualThumbSlider/DualSlider'

function App() {
  
  return (
    <>
      <Slider min={0} max={100} step={25} displayValue={true}/>
      <DualSlider min={0} max={100} step={1} displayValue={true} />
      
    </>
  )
}

export default App
