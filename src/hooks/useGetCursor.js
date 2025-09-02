import React from "react";

const useGetCursor = () => {
	const [posX, setPosX] = React.useState(0);
	const [posY, setPosY] = React.useState(0);

	React.useEffect(() => {
		let rafId = null;

		const handleMouseMove = (e) => {
			if (rafId) return;

			rafId = requestAnimationFrame(() => {
				setPosX(e.clientX);
				setPosY(e.clientY);
				rafId = null;
			});
		};

		document.addEventListener("mousemove", handleMouseMove, { passive: true });

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			if (rafId) {
				cancelAnimationFrame(rafId);
			}
		};
	}, []);

	return [posX, posY];
};

export default useGetCursor;
