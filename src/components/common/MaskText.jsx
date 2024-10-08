import { useEffect, useRef } from 'react';
export default function MaskText({ children }) {
	const ref_frame = useRef(null);

	const frameStyle = { fontSize: '1.2rem', fontFamily: 'orbitron', color: '#555', display: 'inline-block', position: 'relative', overflow: 'hidden', marginBottom: 80 };

	useEffect(() => {
		setTimeout(() => {
			ref_frame.current.classList.add('on');
		}, 100);
	}, []);

	return (
		<div className='slogan' style={frameStyle} ref={ref_frame}>
			<span>{children}</span>
			<div className='mask'></div>
		</div>
	);
}
