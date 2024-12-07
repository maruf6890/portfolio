import React from "react";
import Header from "./component/Header";

import './App.css';
import Hero from "./component/Hero";

import Skills from "./component/Skills";
import Story from "./component/story";
import Projects from "./component/Projects";
import { Outlet } from "react-router";
import Footer from "./component/Footer";



const App = () => {
   return (<>
     <div className="bg-gray-800 w-100 ">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
     </div>
   </>);

};

export default App;
