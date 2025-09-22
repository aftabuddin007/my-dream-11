
import { Suspense } from 'react'
import './App.css'


import AvailablePiayers from './Components/AvailablePiayers/AvailablePiayers'
import Navbar from './Components/Navber/Navbar'
import SelectedPiayers from './Components/SelectedPiayers/SelectedPiayers'

const fetchPlayers = async()=>{
  const res =await fetch("/players.json")
  return res.json()
}

function App() {
 const playerPromise = fetchPlayers() 

  return (
    <>
     

    <Navbar></Navbar>
  
   <Suspense fallback={<div>Loading...</div>}>
    <AvailablePiayers playerPromise={playerPromise}></AvailablePiayers> 
   </Suspense>
   <SelectedPiayers></SelectedPiayers>  
     
    </>
  )
}

export default App
