import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Contact from "./component/Contact";
import Projects from "./component/Project";
import Skill from "./component/Skill";

  
function App() {


  return (
    <>
    {/* <Header/> 
     <About/>
    <Skill/>
     <Projects/>
    <Contact/>
        <Routes>
          <Route path="/" element={<About/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/project" element={<Projects/>}> </Route>
          <Route path="/skill" element={<Skill/>}> </Route>
        </Routes>
       <Footer/>  */}
       <Header/>
        <About/>
       <Skill/>
       <Projects/>
       <Contact/>
       <Footer/> 
    </>
  )
}

export default App
