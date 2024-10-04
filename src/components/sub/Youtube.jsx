import { useState } from 'react';
import Layout from '../common/Layout';

export default function Youtube() {
	const [Colors, setColors] = useState(['red', 'green', 'blue']);

	//ㄴㅅㅁㅅㄷrkqtdms
	const changeColor = () => {
		const newColors = [...Colors];
		newColors[0] = 'hotpink';
		setColors(newColors);
	};

	//console.log();

	return (
		<Layout title={'YOUTUBE'}>
			<button onClick={changeColor}>set New Color</button>
			<ul>
				{Colors.map((color, idx) => {
					return (
						<li style={{ color: color }} key={idx}>
							{color}
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}
