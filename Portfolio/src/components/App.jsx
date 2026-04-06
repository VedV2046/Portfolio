import React from 'react'
import { SiReact, SiNodedotjs, SiJavascript, SiGit, SiPostgresql, SiExpress } from 'react-icons/si';

import Header from "./header";
import Hero from "./hero";
import Stack from "./stack";
import LogoLoop from '../Reactbits/LogoLoop';
import ScrollFloat from '../Reactbits/ScrollFloat';
import TechStack from './techStack';

const techLogos = [
    { node: <SiNodedotjs color="#c0def3"/>, title: "Node.js" },
    { node: <SiReact color="#c0def3"/>, title: "React" },
    { node: <SiPostgresql color="#c0def3"/>, title: "React" },
    { node: <SiJavascript color="#c0def3"/>, title: "Javacript" },
    { node: <SiGit color="#c0def3"/>, title: "Git"},
    { node: <SiExpress color="#c0def3"/>, title: "Express"},
];

function App() {
    return (
        <>
            <div className="pre-about-content">
                <Header />
                <Hero />

                <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        direction="right"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover = {1.5}
                        fadeOut
                        fadeOutColor=""
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>

            <ScrollFloat
                animationDuration={1.8}
                ease='power2.out'
                scrollStart='top 88%'
                scrollEnd='top 25%'
                stagger={0.08}
            >
                ABOUT
            </ScrollFloat>

            <Stack />
            <TechStack />
        </>
    );
}

export default App;