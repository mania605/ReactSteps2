import { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShorthenText from '../../../hooks/useShortenText';

export default function Youtube() {
	const shorthenText = useShorthenText(); //여기서만 호출 가능하지 fetch나 jsx구문 안쪽에서 호룿ㄹ 불가
	console.log(shorthenText);
	const [Vids, setVids] = useState([]);

	const fetchYoutube = () => {
		shortenText('David');
		const api_key = import.meta.env.VITE_YOUTUBE_API;
		const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				console.log(json.items);
				setVids(json.items);
			});
	};
	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<Layout title={'YOUTUBE'}>
			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
						<h3>{vid.snippet.title.length >= 60 ? vid.snippet.title.substr(0, 60) + '...' : vid.snippet.title}</h3>
						<p>
							{vid.snippet.description.length >> 100
								? vid.snippet.description.substr(0, 100) + '...'
								: vid.snippet.description}
						</p>
						<span>{vid.snippet.publishedAt}</span>
					</article>
				);
			})}
		</Layout>
	);
}
