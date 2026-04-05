import React from "react";
import ProfileCard from "../Reactbits/ProfileCard";
import About from "./about";

function Hero() {
    return(
        <div className="hero">
            <div className="hero-left">
                <ProfileCard />
            </div>
            <div className="hero-right">
                <About />
            </div>
        </div>
    );
}

export default Hero;