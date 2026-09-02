import React, {useState, useEffect} from 'react';
import ScrollFloat from '../Reactbits/ScrollFloat';
import CountUp from '../Reactbits/CountUp';
import '../styles/ScrollFloat.css';
import '../styles/Achievements.css';
import achieveImg from "../assets/1st.svg";
import udemyCert from "../../public/udemy-certificate.png";
import googleCert from "../../public/google-cloud-certificate.png";
import elvionCert from "../../public/elvion-hackathon.png";

function Achievements() {
    const [selectedCert, setSelectedCert] = useState(null);

    const [showCerts, setShowCerts] = useState(false);

    useEffect(() => {
        const isModalOpen = Boolean(selectedCert || showCerts);

        if (isModalOpen) {
            const previousBodyOverflow = document.body.style.overflow;
            const previousHtmlOverflow = document.documentElement.style.overflow;

            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = previousBodyOverflow;
                document.documentElement.style.overflow = previousHtmlOverflow;
            };
        }

        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        return undefined;
    }, [selectedCert, showCerts]);

    const certificates = [
        {
            title: "UDEMY - Full Stack Web Dev",
            image: udemyCert,
            description: "Comprehensive training in modern web architecture, focusing on building scalable, data-driven applications and implementing secure user authentication and server-side logic"
        },
        {
            title: "Google Cloud Study Jams",
            image: googleCert,
            description: "Participated in Google Cloud Study Jams, gaining hands-on experience with cloud fundamentals, modern Google Cloud tools, and practical deployment workflows for real-world applications." 
        },
        {
            title: "Elvion Hackathon Participation",
            image: elvionCert,
            description: "Participated in Google Cloud Study Jams, gaining hands-on experience with cloud fundamentals, modern Google Cloud tools, and practical deployment workflows for real-world applications." 
        }
    ];

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
                            to={70}
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
                        <h1>UDEMY - Full Stack Web Dev</h1>
                        <button className="header-contact-btn" onClick={() => setSelectedCert(udemyCert)}>View</button>
                    </div>
                        <h5>Certification</h5>
                    <p>Comprehensive training in modern web architecture, focusing on building scalable, data-driven applications and implementing secure user authentication and server-side logic</p>
                </div>
            </div>
            <div className="second-container">
                <div className="achievement-card">
                    <div className="achievement-header">
                        <h1>Google Cloud Study Jams</h1>
                        <button className="header-contact-btn" onClick={() => setSelectedCert(googleCert)}>View</button>
                    </div>
                    <h5>Certification</h5>
                    <p>Participated in Google Cloud Study Jams, gaining hands-on experience with cloud fundamentals, modern Google Cloud tools, and practical deployment workflows for real-world applications.</p>
                </div>
            </div>
            {selectedCert && (
                <div className="modal-overlay" onClick={() => {
                    setSelectedCert(null);
                    setShowCerts(true);
                    
                }}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={() => {
                                setSelectedCert(null);
                                setShowCerts(true);
                            }}
                            aria-label="Close certificate"
                        >
                            ✕
                        </button>
                        <img src={selectedCert} alt="Certificate" />
                    </div>
                </div>
            )}
            <div className='view-more'>
                <button className="header-contact-btn" onClick={() => setShowCerts(true)}>View All</button>
            </div>
            {showCerts && (
            <div className="modal-overlay" onClick={() => setShowCerts(false)}>
                <div
                    className="modal-grid"
                    onClick={e => e.stopPropagation()}
                    onWheel={e => e.stopPropagation()}
                    onTouchMove={e => e.stopPropagation()}
                >
                    <div className="cert-title">All Certificates</div>
                    {certificates.map((certificate, index) => (
                        <div className="certificate-box" key={`${certificate.title}-${index}`}>
                            <button className="modal-close" onClick={() => setShowCerts(false)}>✕</button>
                            <div className="achievement-header">
                                <h3>{certificate.title}</h3>
                                <button
                                    className="header-contact-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedCert(certificate.image);
                                        setShowCerts(false);
                                    }}
                                >
                                    View
                                </button>
                            </div>
                            <p>{certificate.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    );
}

export default Achievements;