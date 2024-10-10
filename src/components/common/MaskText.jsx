import { motion } from 'framer-motion';

export default function MaskText({ children, duration, delay, color, style }) {
	//기본 스타일 객체
	//(tailwind,styledComponent같이 컴퍼넌트 함수 안쪽에 스타일 구문이 삽입된 형태가 아니다 보니 해당 컴퍼넌트 스타일로 저장하면 외부 sass에 연동하면 범용적으로 쓰기 어려움)
	//이러한 문제점을 개선하기 위해 대안책(styledCompenet, tailwindCSS, 스타일 객체를 직접 내부에 생성)
	const frameStyle = {
		fontSize: '1.2rem',
		fontFamily: 'orbitron',
		color: color,
		display: 'inline-block',
		position: 'relative',
		overflow: 'hidden',
		marginBottom: 20
	};
	const maskStyle = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		backgroundColor: color
	};

	return (
		<div style={{ ...frameStyle, ...style }}>
			<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 0 } }} transition={{ duration: 0.01, delay: duration / 2 + delay }}>
				{children}
			</motion.span>

			<motion.div style={maskStyle} initial={{ x: '-101%' }} animate={{ x: '101%' }} transition={{ duration, delay }}></motion.div>
		</div>
	);
}

//미션
//MaskBox.jsx라는 새로운 컴포넌트 생성
//이미지나 그룹덩어리의 박스요소에 마스크 모션 처리
