import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import './About.css';


const About = ()=> {

  useGSAP(() => {
   gsap.from(" .color-box", {
      scale: 0,
      duration: 1, 
      delay: 0.2,
   })
   gsap.from(".profile-section",{
      scale: 0,
      duration: 1, 
      delay: 1,
   })
   gsap.from(".text-para, .icons", { 
      opacity: 0,
      y: 100,
      stagger: 1,
      delay: 3
   });
   gsap.from(" .text-h1", { 
      opacity: 0,
      x: -200,
      stagger: 1,
      delay: 2
   });
   gsap.from(" .text-title", { 
      opacity: 0,
      x: 200,
      stagger: 1,
      delay: 2
   });



},)
 

    return (
       <>
         <section className="about">

            <div className="color-box">
            </div>

           <div className="profile-section">
           <img src="Profile-img.jpeg" alt=""className='profile-img mx-auto'/>

       <h1> Aishwarya <br /> Sonule </h1>
       <div className="hr mx-auto"></div>
        <p><span>Web Developer</span></p>
          <div className="white"></div>
           </div>

            <div className="text">
                <h1 className='text-h1'> Hello </h1>
                <p className='text-title'><span>Here's who I am & what I do</span></p>
                <p id='text-data' className='text-para'>I'm a Software Developer having a good knowledge of both frontend and backend technologies.
                expertise is to create and UI/UX designs, Frontend Designs and many more.....</p>

                <p id='text-data' className='text-para'>Specializing in Frontend Technologies as well as Backend Technologies, Database, Frameworks, Skilled in creating intituitive, user-friendly websites and applications.</p>

               <div className="icons">
               <a href="https://github.com/Aishwarya-sonule"><i class="fa-brands fa-github"></i></a>
               <a href="https://www.linkedin.com/in/aishwaryasonule/"><i class="fa-brands fa-linkedin"></i></a>
               </div>

            </div>

         </section>
       </>
    )
}

export default About;