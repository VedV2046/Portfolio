import React, { useEffect, useState } from 'react';
import '../styles/loader.css';

const Loader = () => {
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPercent(prev => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 1;
			});
		}, 25); // 20ms × 100 = ~2 seconds total

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="initial-loader" role="status" aria-live="polite" aria-label="Loading portfolio website">
			<h1 className="initial-loader__title">Ved Vharamble</h1>
			<div className="initial-loader__bar-wrapper" aria-hidden="true">
				<div
					className="initial-loader__bar-fill"
					style={{ width: `${percent}%` }}
				/>
			</div>
			<p className="initial-loader__percent">{percent}%</p>
			<p className="initial-loader__subtitle">Crafting the experience...</p>
		</div>
	);
};

export default Loader;