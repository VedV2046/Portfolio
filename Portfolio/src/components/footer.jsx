import React from "react";
import "../styles/Footer.css";
import githubIcon from "../assets/github-logo.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

function Footer() {
    return(
        <div className="footer-container"> 
            <div className="footer-content">

                <div className="footer-left">
                    <p className="footer-name">Ved Vharamble</p>
                    <hr className="footer-divider" />
                    <p className="footer-copyright">© 2026 Ved Vharamble. All rights reserved.</p>
                </div>

                <div className="footer-right"> 
                    <div className="navigator">
                        <h5>Navigate</h5>
                        <ul className="footer-top">
                            <a href="#home"><ul className="ul-content">Home</ul></a>
                            <a href="#about"><ul className="ul-content">About</ul></a>
                            <a href="#techstack"><ul className="ul-content">Techstack</ul></a>
                            <a href="#journey"><ul className="ul-content">Journey</ul></a>
                            <a href="#work"><ul className="ul-content">Work</ul></a>
                            <a href="#contact"><ul className="ul-content">Contact</ul></a>
                        </ul>
                    </div>

                    <div className="socials">
                        <h5>Socials</h5>
                        <div className="footer-icon-box">
                            <a href="https://github.com/VedV2046">
                                <div className="footer-icon-container">
                                    <img src={githubIcon} alt="GitHub" className="footer-icon"/>    
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/ved-vharamble/">
                                <div className="footer-icon-container">
                                    <img src={linkedinIcon} alt="GitHub" className="footer-icon"/>    
                                </div>
                            </a>
                            <a href="https://www.instagram.com/vedv_2046/">
                                <div className="footer-icon-container">
                                    <img src={instagramIcon} alt="GitHub" className="footer-icon"/>    
                                </div>
                            </a>
                        </div> 
                        <a href="mailto:vharambleved@gmail.com">vharambleved@gmail.com</a>
                    </div> 
                </div>

            </div>
        </div>
    );
}

export default Footer;