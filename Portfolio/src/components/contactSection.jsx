import React from "react";
import "../styles/Contact.css";

import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github-logo.svg";
import instagramIcon from "../assets/instagram.svg";

function ContactSection() {
    const contactLinks = [
        {
            title: "Email",
            value: "ved.vharamble@gmail.com",
            href: "mailto:ved.vharamble@gmail.com"
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/ved-vharamble",
            href: "https://www.linkedin.com/in/ved-vharamble"
        },
        {
            title: "GitHub",
            value: "github.com/vedvharamble",
            href: "https://github.com/vedvharamble"
        }
    ];

    return (
        <div className="contact-section-shell">
            <div className="contact-left">
                <p className="heading">Contact</p>
                <div className="contact-title">CONTACT <span style={{ color: "orange" }}>ME</span></div>
                <div className="contact-description">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                    <p>Feel free to reach out and work together on something amazing!</p>
                </div>
                <a className="contact-mail" href="mailto:vharambleved@gmail.com">
                    Reach Out
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
                </a>
            </div>

            <div className="contact-right">
                <p className="heading">Connect</p>
                <div className="card-holder">
                    <a href="https://github.com/VedV2046">
                        <div className="social-card">
                            <div className="icon-container">
                                <img className="socialIcon" src={githubIcon} alt="GitHub" />
                                <h5>GitHub</h5>
                                <p>@VedV2046</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/ved-vharamble/">
                        <div className="social-card">
                            <div className="icon-container">
                                <img className="socialIcon" src={linkedinIcon} alt="LinkedIn" />
                                <h5>LinkedIn</h5>
                                <p>Ved Vharamble</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/vedv_2046/">
                        <div className="social-card">
                            <div className="icon-container">
                                <img className="socialIcon" src={instagramIcon} alt="GitHub" />
                                <h5>Instagram</h5>
                                <p>@vedv_2046</p>
                            </div>
                        </div>
                    </a>
                </div>
                
                <div className="contact-description">
                    <div className="email">
                        <div className="description-title">Email</div>
                        <div className="description-content">vharambleved@gmail.com</div>
                        <hr></hr>
                        <div className="description-title">Location</div>
                        <div className="description-content">Pune</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
