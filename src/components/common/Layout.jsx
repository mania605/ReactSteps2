import { useLocation } from 'react-router-dom';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';

export default function Layout({ title, children }) {
	const ref_title = useRef(null);
	const splitText = useSplitText();
	const { pathname } = useLocation();
	const isDetail = pathname.includes('/youtube/');

	useEffect(() => {
		// 세 번째 파라미터로 지연 시간을 추가 (예: 1초 후에 모션 시작)
		splitText(ref_title, 0.1, 2); // 인수가 3개가 되는 순간부터는 객체 형식으로 전달
	}, []);

	return (
		<main className={isDetail ? 'detail' : title.toLowerCase()}>
			<h1 ref={ref_title}>{title}</h1>
			<section>{children}</section>
		</main>
	);
}
