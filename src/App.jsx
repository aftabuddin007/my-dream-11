
import './App.css'
import navImg from './images/logo.png'
import dollarImg from './images/dollar1.svg'
import AvailablePiayers from './Components/AvailablePiayers/AvailablePiayers'
import SelectedPiayers from './Components/SelectedPiayers/SelectedPiayers'
function App() {
  

  return (
    <>
     
 <div class="navbar bg-red-400 max-w[1280px] mx-auto">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src={navImg} alt="" />
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      
      
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn"><span>000000</span>Coin <img src={dollarImg} alt="" /></a>
  </div>
</div>


   <AvailablePiayers></AvailablePiayers> 
   <SelectedPiayers></SelectedPiayers>  
     
    </>
  )
}

export default App
