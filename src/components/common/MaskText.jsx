import { useEffect, useRef } from 'react';
export default function MaskText({ children }) {
	const ref_frame = useRef(null);
	const [Mounted, setMounted] = useState(false);

	const frameStyle = { fontSize: '1.2rem', fontFamily: 'orbitron', color: '#555', display: 'inline-block', position: 'relative', overflow: 'hidden', marginBottom: 80 };

	const conStyle = { opacity: 0, transitionDuration: '0.1s', transitionDelay: '0.3s' };

	const maskStyle = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: '-100%',
		backgroundColor: '#555',
		transitionTimingFunction: 'linear',
		transitionDuration: '0.6s'
	};

	const conStyleActive = { ...conStyle, opacity: 1 };
	const maskStyleActive = { ...maskStyle, left: '100%' };

	useEffect(() => {
		setTimeout(() => {
			setMounted(true);
		}, 100);
	}, []);

	return (
		<div className='slogan' style={frameStyle} ref={ref_frame}>
			<span style={Mounted ? conStyleActive : conStyle}>{children}</span>
			<div className='mask' style={Mounted ? maskStyleActive : maskStyle}></div>
		</div>
	);
}
