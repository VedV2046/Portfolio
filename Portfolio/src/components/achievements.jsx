import React from 'react';
import ScrollFloat from '../Reactbits/ScrollFloat';
import CountUp from '../Reactbits/CountUp';
import '../styles/ScrollFloat.css';
import '../styles/Achievements.css';
import achieveImg from "../assets/1st.svg";

function Achievements() {
    return (
        <div>
            <ScrollFloat
                animationDuration={61.8}
                ease='power2.out'
                scrollStart='top 80%'
                scrollEnd='top 15%'
                stagger={0.08}
                textClassName='scroll-float-text-secondary'
            >
                ACHIEVEMENTS & CERTIFICATES
            </ScrollFloat>

            <div className="achievements-container">
                <div className="achievement-card" id="win">
                    <div className="achievement-header">
                        <h1 id="first">1st Prize</h1>
                        <img className="achievement-img" src={achieveImg}></img>
                    </div>
                    <h5>SKNCOE IEEE</h5>
                    <p>Secured 1st position in the poster making competition organized by IEEE at SKNCOE, showcasing creativity and artistic skills in conveying a powerful message for community engagement</p>
                </div>
                <div className="achievement-card achievement-card-count">
                    <div className="count-up-row">
                        <CountUp
                            from={0}
                            to={20}
                            separator="," 
                            direction="up"
                            duration={2}
                            className="count-up-text"
                            delay={0}
                        />
                        <div className="count-up-plus">+</div>
                    </div>
                    <p className="count-up-label">Google Skill Badges</p>
                </div> 
            </div>

            <div className="second-container">
                <div className="achievement-card">
                    <div className="achievement-header">
                        <h1>Certification</h1>
                    </div>
                    <h5>UDEMY - Full Stack Web Dev</h5>
                    <p>Comprehensive training in modern web architecture, focusing on building scalable, data-driven applications and implementing secure user authentication and server-side logic</p>
                </div>
            </div>
        </div>
        
    );
}

export default Achievements;