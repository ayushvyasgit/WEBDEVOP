import { Children, useEffect, useState ,useNavigate} from "react";
import { PostComponent } from "./Post";
import {BrowserRouter,Routes,Route ,Link, useNavigate, redirect} from "react-router-dom"; 
function App(){
  
  return(
    <BrowserRouter>
      <Link to="/">Allen</Link>
      <Routes>
        <Route path="/" element={Landing()}></Route>
        <Route path="/class11" element={Class11Program()}></Route>
        <Route path="/class12" element={Class12Program()}></Route>
        <Route path="*"        element={ErrorPage()}></Route>
      </Routes>
    </BrowserRouter>
  )
}

function ErrorPage(){
  return(
    <div>
      Error saarrr..
    </div>
  )
}
function Landing(){
  return(
    <div>
      HI There welcome
    </div>
  )
}
function Class11Program(){
  return(
    <div>
      Neet Programs for class 1th 
    </div>
  )
}
function Class12Program(){
  const navigate = useNavigate();
  return(
    <div>
      Neet Programs for class 12th 
    </div>
  )
}
export default App;