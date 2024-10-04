import { useState, useEffect } from 'react';
import Layout from '../common/Layout';

export default function Youtube() {
	console.log('Youtube 컴포넌트 재호출');
	const [Num, setNum] = useState(0);
	const [Vids, setVids] = useState([]);

	const api_key = 'AIzaSyCtJt2jnOcXV6eLUZmF2gT6LGa3mSPkpbM';
	const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	useEffect(() => {
		console.log('무거운 유튜브 데이터 fetching 연산 실행');
		fetch(url)
			.then(data => data.json())
			.then(json => {
				setVids(json.items);
			});
	}, []);

	return (
		<Layout title={'YOUTUBE'}>
			<button onClick={() => setNum(Num + 1)}>Num변경</button>
			<h2>{Num}</h2>

			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						<h3>{vid.snippet.title}</h3>
					</article>
				);
			})}
		</Layout>
	);
}

/*		
리액트만의 장점
-JSX를 통해서 생성되는 가상돔이란 요소를 메모리단에서 제어하기 때문에
-실제 브라우저가 모든 돔 트리를 탐색하며 수행해야 되는 물리적인 연산을 최소화할 수 있음(DOM조각의 최소화)

서버에서 가져오는 데이터를 State에 담아 놓지 않으면 다음과 같으 문제점 발생
-then구문 안쪽에서 서버에서 가져온 데이터를 변수에 옮겨 담았을 때 
- 해당 지역변수에 들어가 있는 값을 콜백함수then구문 바깥에서 호출할 방법이 없음
-설사 데이터를 전역변수, querySelector를 이영해서 꺼내온다고 하더라도
- 특정 state가 변경되면, 컴포넌트 함수 자체가 재호출되는 특성상 무거운 fetching함수 연산이 매번 재실행 됨

위와 같은 문제점 해결방법
-의존성 배열이 비어있는 useEffect의 콜백함수 안쪽에서 data fetching처리 후 state에 담아줌
-설사 다른 state가 변경돼서 컴포넌트가 자주 재호출 되더라도 
- 연산처리가 많이 되는 fetching함수의 호출을 컴포넌트의 마운트 시점으로 제한 했기 때문에
- 컴포넌트가 언마운트 되지 않는 한 data fetching과 그 결과값을 state에 담아주는 로직은 재연산, 재호출 되지 않음

useEffect에 의존성 배열이 비워져 있는 콜백을 활용하는 사례
외부서버 데이터 fetching

미션-
1. 위의 useEffect가 필요한 이유 숙지
2. 유튜브 섬네일 제목 본문 날짜까지 출력 pic component활용

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
