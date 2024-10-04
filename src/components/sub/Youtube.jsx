import { useState } from 'react';
import Layout from '../common/Layout';

export default function Youtube() {
	const [Num, setNum] = useState(0);

	const minusNum = () => {
		setNum(Num - 1);
	};

	console.log(Num);

	return (
		<main className='youtube'>
			<Layout title={'YOUTUBE'}>
				<h2>Num</h2>
				<button onClick={minusNum}>minus</button>
				<button onClick={() => setNum(Num + 1)}>plus</button>
			</Layout>
		</main>
	);
}
