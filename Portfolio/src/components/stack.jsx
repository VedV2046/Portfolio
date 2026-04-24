import React, { useEffect, useRef, useState } from 'react';
import ScrollStack, { ScrollStackItem } from '../Reactbits/ScrollStack';

function Stack() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section || isVisible) return;

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0]?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.22,
				rootMargin: '0px 0px -10% 0px'
			}
		);

		observer.observe(section);

		return () => observer.disconnect();
	}, [isVisible]);

	return (
		<section ref={sectionRef} className={`hero stack-section${isVisible ? ' is-visible' : ''}`}>
			<div className="hero-left stack-left">
				<div className="stack-copy">
						<p>Coming from a B.Tech in Electronics & Telecommunication, I approach the web with an engineer’s mindset—focusing on efficiency, modular architecture, and low-level optimization.</p> 
						<p>While I understand the hardware, my passion lies in the Full-Stack ecosystem, where I transform complex problems into seamless user experiences.</p>
						<p>Currently obsessed with the shift from Web2 to Web3. I’m honing my skills in ICP and Motoko to bridge the gap between traditional web architecture and the decentralized future.</p>
					
				</div>
			</div>

			<div className="hero-right stack-right">
				<ScrollStack
					useWindowScroll
					className="stack-scroll compact-stack"
					itemDistance={6}
					itemStackDistance={52}
					baseScale={0.9}
					itemScale={0.03}
					stackPosition="36%"
					scaleEndPosition="12%"
				>
					<ScrollStackItem>
						<h2>UI Design</h2>
						<p>It’s about clarity and intent. I treat a user interface like a high-performance circuit</p>
						<p>Building layouts that feel intuitive, not cluttered.</p>
					</ScrollStackItem>
					<ScrollStackItem>
						<h2>UX Design</h2>
						<p>I view UX as the Operating System of a website. It’s the logic behind the layout. Drawing from my engineering roots, I prioritize frictionless flow and cognitive ease.</p>
					</ScrollStackItem>
					<ScrollStackItem>
						<h2>Interactive</h2>
						<p>I try building high-performance, reactive interfaces where every click, scroll, and hover feels instantaneous and intentional.</p>
					</ScrollStackItem>
                    <ScrollStackItem style={{ backgroundColor: '#28a0f6' }}>
						<h2>React Framework</h2>
						<p>I leverage React to build dynamic, component-driven interfaces. By focusing on reusability and efficient state logic, I transform static designs into high-performance web applications.</p>
					</ScrollStackItem>
				</ScrollStack>
			</div>
		</section>
	);
}

export default Stack;
