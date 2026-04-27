const Loader = () => {
	return (
		<div className="initial-loader" role="status" aria-live="polite" aria-label="Loading portfolio website">
			<div className="initial-loader__orb" aria-hidden="true" />
			<h1 className="initial-loader__title">Ved Vharamble</h1>
			<p className="initial-loader__subtitle">Crafting the experience...</p>
		</div>
	);
};

export default Loader;
