import React from "react";
import SplitText from "../Reactbits/SplitText";
import CircularText from "../Reactbits/CircularText";

function About() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return(
        <div>
            <SplitText
                text="Hello, I'm Ved Vharamble"
                className="text-2xl font-semibold text-center"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.0rem)', lineHeight: 1.1, fontWeight: 700 }}
                delay={90}
                duration={1.5}
                ease="elastic.out(1, 0.3)"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
            />

            <p className="myself">"Electronics Engineer by day, Web Architect by night. I specialize in crafting modern interfaces with React and exploring the future of the web through decentralized protocols. Constantly learning, forever building."</p>
            
            <div className="right-bt">
                <div className="right1">Imagine</div>
                <div className="right2">
                    <CircularText
                    text="IMAGINE-THINK-BUILD-"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"/>
                </div>
                <div className="right3">Build</div>
            </div>
        </div>
    );
}

export default About;