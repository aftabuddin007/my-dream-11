
import { Suspense } from 'react'
import './App.css'


import AvailablePiayers from './Components/AvailablePiayers/AvailablePiayers'
import Navbar from './Components/Navber/Navbar'
import SelectedPiayers from './Components/SelectedPiayers/SelectedPiayers'
import { useState } from 'react'

const fetchPlayers = async()=>{
  const res =await fetch("/players.json")
  return res.json()
}

function App() {
 const playerPromise = fetchPlayers() 
  const [toggle,setToggle] = useState(true)
  return (
    <>
     

    <Navbar></Navbar>
    
    <div className='max-w-[1280px] mx-auto p-4 flex justify-between items-center'>
    <h1 className='font-bold text-xl'>Available Players</h1>
    <div className='  my-4'>
      <button onClick={()=>setToggle(true)} className={`btn btn-soft btn-warning ${toggle===true?"bg-amber-400":""}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`btn btn-soft btn-warning ${toggle===false?"bg-amber-400":""}`}>Selected <span>(0)</span></button>
    </div>
    </div>





   {
    toggle === true ?<Suspense fallback={<div>Loading...</div>}>
    <AvailablePiayers playerPromise={playerPromise}></AvailablePiayers> 
   </Suspense>:<SelectedPiayers></SelectedPiayers>  
   }
   
     
    </>
  )
}

export default App
