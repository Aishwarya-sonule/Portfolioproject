import './Footer.css';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Footer = ()=> {

      useEffect(() => {
            AOS.init();
          }, [])
        
    return (
        <>
          <div className="pannel">
            <div className="pannel-one">
            <p style={{marginLeft: "60px"}}  > &#169; Aishwarya Sonule | Web Developer</p>

            </div>
            <div className="pannel-two">
                <div className="call" style={{marginLeft: "220px"}}> 
                    <h3 style={{fontWeight: "500", fontSize: "16px", marginLeft: "10px"}}> Call </h3>
                    <p> 7378777128 </p>
                </div>
                <div className="email">
                     <h3 style={{fontWeight: "500", fontSize: "16px", marginLeft: "10px"}}> E-mail </h3>
                <p> xyz@gmail.com </p></div>
                <div className="follow">
                    <h3 style={{fontWeight: "500", fontSize: "16px", marginLeft: "10px"}}> Follow</h3>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
          </div>
        </>
    )
}

export default Footer;