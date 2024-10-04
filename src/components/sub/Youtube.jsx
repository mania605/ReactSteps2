import { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/Pic';
import useShortenText from '../../../hooks/useShortenText';
import useCombineText from '../../../hooks/useCombineText';

export default function Youtube() {
	const shortenText = useShortenText(); //여기서만 호출 가능하지 fetch나 jsx구문 안쪽에서 호출 불가
	const combineText = useCombineText();
	const [Vids, setVids] = useState([]);

	const fetchYoutube = () => {
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
						<h3>{shortenText(vid.snippet.title, 60)}</h3> {/* 제목을 60자로 줄이기 */}
						<p>{shortenText(vid.snippet.description, 150)}</p> {/* 설명을 150자로 줄이기 */}
						<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
					</article>
				);
			})}
		</Layout>
	);
}
