import { useState, useEffect } from 'react';
import Layout from '../common/Layout';

export default function Youtube() {
	// const [Vids, setVids] = useState([]);
	//	console.log(Vids);

	let Vids = [];

	const api_key = 'AIzaSyDfF904vE_uzyNlnhKgAyUmNWV9U5vTxZ0';
	const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	fetch(url)
		.then(data => data.json())
		.then(json => {
			const youtubeArr = json.items;
			Vids = youtubeArr;
		});

	return (
		<Layout title={'YOUTUBE'}>
			{Vids.map((vid, idx) => {
				<article>
					<h3>vid.snippet.title</h3>
				</article>;
			})}
		</Layout>
	);
}

/*		
리액트만의 장점
-JSX를 통해서 생성되는 가상돔이란 요소를 메모리단에서 제어하기 때문에
-실제 브라우저가 모든 돔 트리를 탐색하며 수행해야 되는 물리적인 연산을 최소화할 수 있음(DOM조각의 최소화)

*/

// // useEffect로 컴포넌트가 처음 마운트될 때만 데이터 fetch
// useEffect(() => {
// 	fetch(url)
// 		.then(data => data.json())
// 		.then(json => {
// 			const youtubeArr = json.items;
// 			setVids(youtubeArr); // 데이터를state에 저장
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 		});
// }, [url]);

// return (
// 	<Layout title={'YOUTUBE'}>
// 		<ul>
// 			{Vids.map((vid, idx) => (
// 				<li key={idx}>
// 					<h3>{vid.snippet.title}</h3>
// 					<img src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
// 				</li>
// 			))}
// 		</ul>
// 	</Layout>
// );
//}
