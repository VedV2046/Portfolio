import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import DecryptedText from '../Reactbits/DecryptedText';

import BentoBox from './bentobox';

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '56, 189, 248';

const calculateSpotlightValues = (radius) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};


function TechStack({ id }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const pageContent = sectionRef.current.closest('.page-content');

        const visibilityObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
                    pageContent?.classList.add('techstack-visible');
                    visibilityObserver.unobserve(sectionRef.current);
                }
            },
            {
                threshold: [0, 0.35, 0.5, 1],
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        visibilityObserver.observe(sectionRef.current);

        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `
            position: fixed;
            width: 700px;
            height: 700px;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(circle,
                rgba(${DEFAULT_GLOW_COLOR}, 0.18) 0%,
                rgba(${DEFAULT_GLOW_COLOR}, 0.08) 20%,
                rgba(${DEFAULT_GLOW_COLOR}, 0.03) 45%,
                transparent 70%
            );
            z-index: 120;
            opacity: 0;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
        `;

        document.body.appendChild(spotlight);

        const handleMouseMove = (event) => {
            if (!sectionRef.current) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();
            const mouseInside =
                event.clientX >= sectionRect.left &&
                event.clientX <= sectionRect.right &&
                event.clientY >= sectionRect.top &&
                event.clientY <= sectionRect.bottom;

            const cards = sectionRef.current.querySelectorAll('.magic-bento-card');

            if (!mouseInside) {
                gsap.to(spotlight, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                cards.forEach((card) => {
                    card.style.setProperty('--glow-intensity', '0');
                });
                return;
            }

            const { proximity, fadeDistance } = calculateSpotlightValues(DEFAULT_SPOTLIGHT_RADIUS);
            let minDistance = Infinity;

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY) - Math.max(rect.width, rect.height) / 2;
                const effectiveDistance = Math.max(0, distance);

                minDistance = Math.min(minDistance, effectiveDistance);

                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                } else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }

                updateCardGlowProperties(card, event.clientX, event.clientY, glowIntensity, DEFAULT_SPOTLIGHT_RADIUS);
            });

            gsap.to(spotlight, {
                left: event.clientX,
                top: event.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            const targetOpacity =
                minDistance <= proximity
                    ? 0.85
                    : minDistance <= fadeDistance
                        ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.85
                        : 0;

            gsap.to(spotlight, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            if (!sectionRef.current) return;

            sectionRef.current.querySelectorAll('.magic-bento-card').forEach((card) => {
                card.style.setProperty('--glow-intensity', '0');
            });

            gsap.to(spotlight, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            visibilityObserver.disconnect();
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlight.parentNode?.removeChild(spotlight);
        };
    }, []);

    return (
        <div id={id} ref={sectionRef} className="techstack-bento-section">
            <section className="techstack-section">
                <DecryptedText
                    text="TECHSTACK"
                    speed={220}
                    maxIterations={15}
                    characters="ABCD1234!?"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="inViewHover"
                />
            </section>

            <BentoBox />
            
        </div>
    );
}

export default TechStack;