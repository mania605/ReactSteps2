import { useState, useEffect } from 'react';
import Layout from '../common/Layout';

export default function Youtube() {
	const [Vids, setVids] = useState([]);
	//	console.log(Vids);

	const api_key = 'AIzaSyDfF904vE_uzyNlnhKgAyUmNWV9U5vTxZ0';
	const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	/*아래와 같이 서버에서 가져온 데이터를 컴포넌트 안쪽에서 활용하기 위해state담는 구문을 useEffect를 사용하지 않고 바로 활용하면 데이터를 무한호출하는 이슈발생
	미션 아래 코드 호춢해서 무한데이터 호출 발생하는 현상 확인한 뒤, 위와 같은 이슈 발생하는 원인 고민


이유:
기본적으로 React는 state값 변경을 자동으로 인지해서 자기자신 컴포넌트 함수를 재호출해서 새로운jsx를 반환함.
그러니까 해당 state정보값에 기반한 새로운 jsx반환으로 화면의 변경점 갱신
위의 관점에서 볼 때 useEffect를 활용하지 않고 바로 서버데이터를 state에 담으면
처음 마운트시 서버에서 데이터를 가져오고 해당 데이터를 state에 담자마자 컴포넌트가 재호출됨.
컴포넌트 재호출되면 또다시 서버 데이터를 가져오고 다시 state에 담음 -이와 같이 위의 로직이 무한반복 처리됨.
 
해결 방법:
useEffect()를 사용하여 컴포넌트가 처음 렌더링될 때만 fetch()를 호출합니다.
setVids()를 통해 가져온 데이터를 상태에 저장하고, 이 상태를 렌더링에 활용합니다.

의존성 배열이 비어있는 useEffect의 콜백함수 안쪽에서 data fetching 및 state에 담는 로직을 호출해서
컴포넌트 마운트시 처음 한번만 호출되도록 강제해야 함.

	fetch(url)
		.then(data => data.json())
		.then(json => {
			const youtubeArr = json.items;
			console.log(youtubeArr);
		});
*/

	// useEffect로 컴포넌트가 처음 마운트될 때만 데이터 fetch
	useEffect(() => {
		fetch(url)
			.then(data => data.json())
			.then(json => {
				const youtubeArr = json.items;
				setVids(youtubeArr); // 데이터를state에 저장
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}, [url]);

	return (
		<Layout title={'YOUTUBE'}>
			<ul>
				{Vids.map((vid, idx) => (
					<li key={idx}>
						<h3>{vid.snippet.title}</h3>
						<img src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
					</li>
				))}
			</ul>
		</Layout>
	);
}
