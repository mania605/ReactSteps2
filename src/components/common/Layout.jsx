import { useLocation } from 'react-router-dom';
import useSplitText from '../../hooks/useSplitText';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MaskText from './MaskText';
import MaskBox from './MaskBox';

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

			<MaskText duration={1} delay={0} color={'#000'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad?
			</MaskText>
			<br />

			<MaskText
				duration={0.6}
				delay={1}
				color={'#999'}
				style={{ marginTop: 50, fontSize: 80, fontFamily: 'raleway' }}>
				Lorem ipsum dolor
			</MaskText>

			<h1 ref={ref_title}>{title}</h1>

			<MaskBox
				duration={1}
				delay={0}
				maskColor={'#000'}
				style={{ width: '300px', height: '300px' }}>
				<img src='https://via.placeholder.com/300' alt='Masked Image' />
			</MaskBox>

			<MaskBox
				duration={1.5}
				delay={0.5}
				maskColor={'#333'}
				style={{ width: '100%', height: '200px', backgroundColor: '#f4f4f4' }}>
				<div style={{ padding: '20px' }}>
					Masked Content with Background Color
				</div>
			</MaskBox>

			<motion.section
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
				transition={{ duration: 1, delay: 0.7, ease: 'linear' }}>
				{children}
			</motion.section>
		</main>
	);
}
