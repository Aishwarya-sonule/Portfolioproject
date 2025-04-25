import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = ()=> {

    useEffect(() => {
          AOS.init();
        }, [])

    return (
      <>
       <div className="contact-section">
           <div className="heading" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
            <div className="box"></div>
            <h1  >Contact Me</h1>
           </div>

         <div className="form" >
            <form action=""   data-aos="zoom-in-down" className='form-box'>
               <div className="first" >


               <div className="name-input">
               <div className="name">
               <div data-aos="fade-right"><label htmlFor="name">First Name * </label> <br />
               <input type="text" name="" id="name-input" /> <br /><br /></div>
               </div>

                <div className="last">
                <div data-aos="fade-left"><label htmlFor="name">Last Name * </label><br />
                <input type="text" name="" id="name-input" /><br /><br /></div>
                </div>
               </div>
               

               <div data-aos="fade-right"> <label htmlFor="name">Email * </label> <br />
               <input type="text" name="" id="" /><br /><br /></div>

                <div data-aos="fade-left"><label htmlFor="name">Subject * </label><br />
                <input type="text" name="" id="" /><br /><br /></div>

             <div data-aos="fade-right"><label htmlFor="name">Message * </label><br />
            <input type="text" name="" id="" style={{height: "100px"}}/><br /><br /></div>

                <button className='submit' data-aos="zoom-in-down">
                  Submit
                </button>
            </div>                
            </form>
         </div>

       </div>
      </>
    )
}

export default Contact;