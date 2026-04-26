import React from "react";
import PillNav from "../Reactbits/PillNav";
import "../styles/header.css";

function Header() {
    return(
        <header className="port-header">
            <div className="header-inner">
                <a className="header-name" href="#home">Ved Vharamble</a>

                <div className="header-nav-wrap">
                    <PillNav
                        showLogo={false}
                        items={[
                                { label: 'Home', href: '#home' },
                                { label: 'About', href: '#about' },
                                { label: 'Techstack', href: '#techstack' },
                                { label: 'Journey', href: '#journey' },
                                { label: 'Work', href: '#projects' },
                            ]}
                        activeHref=""
                        className="custom-nav"
                        ease="power2.easeOut"
                        baseColor="#000000"
                        pillColor="#4f95ff"
                        hoveredPillTextColor="#ffffff"
                        pillTextColor="#000000"
                        theme="light"
                        initialLoadAnimation={true}
                    />
                </div>

                <a className="header-contact-btn" href="#contact">Contact Me</a>
            </div>
        </header>
    );
}

export default Header;