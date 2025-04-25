import './Header.css';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ()=> {

    useGSAP(()=>{

      gsap.from("li",{
        y: -100,
        opacity: 0,

      })
  
    },[]);

       const [showMenu, setshowMeu] = useState(true);
       const handletoggle = ()=> {
         console.log("clicked");
         setshowMeu(!showMenu);
       }    

    return (

       <>
      
        <div className="pannel">
        <div className="nav-one">
             <div className="logo">
             <div className="box"> 
             </div>
            <a href="" className='logo-text'> <span>Aishwarya Sonule </span> | Web Developer </a>
        </div>
             </div>

        <div  >
            <ul className= {showMenu ? 'nav-two' : 'nav-three'}>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/skill'>Skills</Link></li>
                <li><Link to='/project'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
          
          <div className="toggle-btn">
          <i class="fa-solid fa-bars" onClick={handletoggle}></i>
          </div>

      
        </div>

      </>
    )
}

export default Header;