import { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';

export default function Youtube() {
	const [Vids, setVids] = useState([]);

	const api_key = 'AIzaSyCtJt2jnOcXV6eLUZmF2gT6LGa3mSPkpbM';
	const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	//미션-
	//2. 유튜브 섬네일 제목 본문 날짜까지 출력 pic component활용

	useEffect(() => {
		fetch(url)
			.then(data => data.json())
			.then(json => {
				console.log(json.items);
				setVids(json.items);
			});
	}, []);

	return (
		<Layout title={'YOUTUBE'}>
			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
						<h3>{vid.snippet.title}</h3>
						<p>{vid.snippet.description}</p>
						<span>{vid.snippet.publishedAt}</span>
					</article>
				);
			})}
		</Layout>
	);
}
