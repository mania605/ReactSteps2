import { useLocation } from 'react-router-dom';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Layout({ title, children }) {
	const ref_title = useRef(null);
	const splitText = useSplitText();
	const { pathname } = useLocation();
	const isDetail = pathname.includes('/youtube/');

	useEffect(() => {
		splitText(ref_title, { interval: 0.1 });
	}, []);

	return (
		<main className={isDetail ? 'detail' : title.toLowerCase()}>
			<h1 ref={ref_title}>{title}</h1>

			<motion.section initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 200, transition: { delay: 0 } }} transition={{ duration: 1, delay: 0.7 }}>
				{children}
			</motion.section>
		</main>
	);
}
