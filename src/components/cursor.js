import React, { useRef, useEffect } from "react";

const Cursor = ({ top, left }) => {
	const cursorRef = useRef(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		if (!cursor) return;

		cursor.style.transform = `translate3d(${left - 3}px, ${top - 3}px, 0px)`;
	}, [top, left]);

	return (
		<div
			ref={cursorRef}
			className="pointer-events-none fixed z-[9999] h-1.5 w-1.5 rounded-full bg-light-grey transition-transform duration-200 ease-out"
		/>
	);
};

export default Cursor;
