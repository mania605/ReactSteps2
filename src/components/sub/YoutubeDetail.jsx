import { useParams } from 'react-router-dom';
import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import useCombineText from '../../../hooks/useCombineText';

export default function YoutubeDetail() {
	const { id } = useParams();
	const [YoutubeVid, setYoutubeVid] = useState(null);
	const combineText = useCombineText();

	useEffect(() => {
		const api_key = import.meta.env.VITE_YOUTUBE_API;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				setYoutubeVid(json.items[0]);
			});
	}, []);

	return (
		<Layout title={YoutubeVid?.snippet.title}>
			<figure className='vidFrame'>
				<iframe
					width='100%'
					height='100%'
					title='youtube'
					src={`https://www.youtube.com/embed/${YoutubeVid?.snippet.resourceId.videoId}`}></iframe>
			</figure>

			<p>{YoutubeVid?.snippet.description}</p>
			<span>{combineText(YoutubeVid?.snippet.publishedAt.split('T')[0], '-', '.')}</span>
		</Layout>
	);
}

/*
  자가진단 항목
  1. useState를 이용해서 state에 값을 옮겨담고 state변경함수로 state값 변경처리
  2. useEffect구문의 구조를 파악하고 의존성 배열의 역할
  3. useState와 useEffect를 활용해서 서버 데이터 fetching처리후 state에 담기
  4. 다이나믹 라우터를 이용해서  /youtube/:id를 활용해서 상세페이지에 특정 id값 전달하는 방법
  5. 상태값에 있는 객체를 불러올떄 ?. 형태로 옵셔녈 체이닝을 처리하는 이유
  6. 커스텀훅 만드는 방법  (선택사항)
  7. useShortenText 커스텀훅 사용방법 (선택사항)
  8. useCombineText 커스텀훅 사용방법 (선택사항)
*/

/*
	동적 라우터(Dynamic Router)
	-상세페이지 같은 컨텐츠를 출력해야 될 떄 각각의 상세페이지 컨텐츠에 대응되는 컴포넌트를 만드는 것은 비효율적
	-특정 URL뒤에 값을 /:id 같은 형식으로 비어있는 상세페이지 컴포넌트에 전달
	-상세페이지 컴포넌트에서는 id값을 useParam()훅을 통해 전달받음
	-이렇게 전달받은  고유 id값을 이용해서 상세 페이지 전용 데이터를 새롭게 데이터를 요청해서 받은 뒤 출력하는 형식

	
*동적 라우터를 확인해야되는 컴포넌트 순서
1.APP.jsx에서 동적 라우터 패턴 확인(:id과 같은 파라미터명)
2.Youtube.jsx에서 클릭한 요소의 Link에 적용되어 있는 이동 URL 확인 (37열)
3.YoutubeDetail.jsx에서 useParams()훅 호출한 뒤, 전달된 id값을 추출하고 해당 id값을 활용한 새로운 상세페이지 전용 컨텐츠 데이터 요청
*/
