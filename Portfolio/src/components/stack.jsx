import React from 'react';
import ScrollStack, { ScrollStackItem } from '../Reactbits/ScrollStack';

function Stack() {
	return (
		<section className="hero stack-section">
			<div className="hero-left stack-left">
				<div className="stack-copy">
					<h2>Selected Work</h2>
					<p>
						A collection of ideas, experiments, and interface studies that show how I
						build, iterate, and ship.
					</p>
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
						<h2>Card 1</h2>
						<p>This is the first card in the stack</p>
					</ScrollStackItem>
					<ScrollStackItem>
						<h2>Card 2</h2>
						<p>This is the second card in the stack</p>
					</ScrollStackItem>
					<ScrollStackItem>
						<h2>Card 3</h2>
						<p>This is the third card in the stack</p>
					</ScrollStackItem>
                    <ScrollStackItem>
						<h2>Card 3</h2>
						<p>This is the third card in the stack</p>
					</ScrollStackItem>
                    <ScrollStackItem>
						<h2>Card 3</h2>
						<p>This is the third card in the stack</p>
					</ScrollStackItem>
                    <ScrollStackItem>
						<h2>Card 3</h2>
						<p>This is the third card in the stack</p>
					</ScrollStackItem>
				</ScrollStack>
			</div>
		</section>
	);
}

export default Stack;
