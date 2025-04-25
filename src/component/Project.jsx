import './Project.css';
// import { useGSAP } from '@gsap/react';
// import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = ()=> {
 
      useEffect(() => {
        AOS.init();
      }, [])

    return (
      <>
       <div className="project-section">
       <div className="heading" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
            <div className="box"></div>
            <h1>Projects</h1>
           
           </div>
 
     <div className="project-card">
        <div className="card1" data-aos="slide-left" >

        <div className="card-img">
                <img src="coffee.png" style={{marginTop: "30px",}}alt="" />
                
            </div>

            <div className="card-text">
              <h2 className='card-heading'>Coffee Website </h2>
              <p className='role-title'>With Fully Responsivness</p>
              <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo expedita vero architecto </p>
            </div>
            
        </div>
        {/* Card-1 Ends Here */}

        <div className="card1"  data-aos="slide-down">

        <div className="card-img">
            <img src="cafe-coffee1.png" style={{marginTop: "30px",}}alt="" />
            </div>


            <div className="card-text">
              <h2 className='card-heading'>The Cafe Coffee Day's Clone </h2>
              <p className='role-title'>With GIFs </p>
              <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo expedita vero architecto</p>
            </div>
           
        </div>

        <div className="card1" data-aos="slide-right">

        <div className="card-img">
            <img src="chocolate-1.png" style={{marginTop: "30px",}}alt="" />
            </div>


            <div className="card-text">
              <h2 className='card-heading'>chocolate Website </h2>
              <p className='role-title'>With Multiple DynamicPages</p>
              <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo expedita vero architecto </p>
            </div>
           
        </div>

     </div>
     {/* Project-Card Ends Here */}
        

       </div>
       {/* Project Section Ends Here */}
      </>
    )
}

export default Projects;