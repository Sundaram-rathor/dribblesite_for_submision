import React,{useEffect} from 'react'
import { gettingData } from './utils/data.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx'
import Jobs from './components/jobs/Jobs.jsx'
import Gopro from './components/goPro/GoPro.jsx'
import Login from './components/login/Login.jsx'

import Footer from './components/footer/Footer.jsx'
import ExploreInspiringDesign from './components/home/homeComponents/exploreInsp/ExploreInspiringDesign.jsx';


 


function App() {

  //api calling
 

  return (
    <BrowserRouter >
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/gopro' element={<Gopro/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/inspiration' element={<ExploreInspiringDesign/>}/>
      </Routes>      

      <Footer/>
      
    </BrowserRouter>
  )
}

export default App