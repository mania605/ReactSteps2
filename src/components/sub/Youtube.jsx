import { useState } from 'react';
import Layout from '../common/Layout';

export default function Youtube() {
	const [Colors, setColors] = useState(['red', 'green', 'blue']);

	//console.log();

	return (
		<Layout title={'YOUTUBE'}>
			<ul>
				{' '}
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
