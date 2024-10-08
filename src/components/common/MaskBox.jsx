import { motion } from 'framer-motion';

export default function MaskBox({
	children,
	duration,
	delay,
	color,
	style,
	maskColor = '#000'
}) {
	// 기본 스타일 객체
	const frameStyle = {
		display: 'inline-block',
		position: 'relative',
		overflow: 'hidden',
		width: '100%',
		height: '100%',
		...style
	};

	const maskStyle = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: maskColor
	};

	return (
		<div style={frameStyle}>
			<motion.div
				style={maskStyle}
				initial={{ x: '-100%' }}
				animate={{ x: '100%' }}
				transition={{ duration, delay }}></motion.div>
			{/* 마스크가 사라지면서 자식 요소가 보여짐 */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.01, delay: duration / 2 + delay }}>
				{children}
			</motion.div>
		</div>
	);
}
