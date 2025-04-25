import './Skill.css';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

// // ✅ Register the plugin
gsap.registerPlugin(ScrollTrigger);

import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = ()=> {

  useEffect(() => {
    AOS.init();
  }, [])
    
  
    return (
      <>
        <div className="skill-section">
            <div className="heading" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
                <div className="box"></div>
                <h1 className="skill-heading"> Technical skill </h1>
            </div>
            <p className="title" data-aos="slide-down">My knowledge level in software</p>

          <div className="skill-set"  data-aos="zoom-in-down">

           <div className="skills" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="500"
                                   data-aos-delay = "1000">
           <p><span>HTML & CSS </span> </p> <div className="htmlbar" id='bar'></div> <p className='percent'>95%</p>
           </div>

           <div className="skills" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="500"
                                    data-aos-delay = "1500">
           <p><span> JavaScript </span> </p> <div style={{backgroundColor: "#0050FF", height: "12px", width: "300px"}} id='bar'></div> <p className='percent'>75%</p>
           </div>

           <div className="skills" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="500"
                                   data-aos-delay = "2000">
           <p><span> ReactJs </span> </p> <div style={{backgroundColor: "#0050FF", height: "12px", width: "280px"}} id='bar'></div> <p className='percent'>70%</p>
           </div>

           <div className="skills" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="500"
                                   data-aos-delay = "2500">
           <p><span> Java </span> </p> <div style={{backgroundColor: "#0050FF", height: "12px", width: "280px"}} id='bar'></div> <p className='percent'>70%</p>
           </div>

           <div className="skills" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="500"
                                   data-aos-delay = "3000">
           <p><span> Spring Boot </span> </p> <div style={{backgroundColor: "#0050FF", height: "12px", width: "300px"}} id='bar'></div> <p className='percent'>75%</p>
           </div>

           <div className="skills" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="500"
                                   data-aos-delay = "4500">
           <p><span> Gsap </span> </p> <div style={{backgroundColor: "#0050FF", height: "12px", width: "325px"}} id='bar'></div> <p className='percent'>85%</p>
           </div>

           <div className="skills" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="500"
                                   data-aos-delay = "5000">
           <p><span> SQL </span> </p> <div style={{backgroundColor: "#0050FF", height: "12px", width: "320px"}} id='bar'></div> <p className='percent'>80%</p>
           </div>

          </div>
      

        </div>
        {/* Skill Section Ends Here */}
      </>
    )
}

export default Skill;