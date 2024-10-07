import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import Pic from '../common/pic';
import Modal from '../common/modal';

export default function Gallery() {
	const [Flickr, setFlickr] = useState([]);
	console.log(Flickr); //1. 외부데이터를 담을 빈 State공간 상태값과 State변경함수를 useState로부터 생성- []로 빈그릇만 만들어 놓는 것
	const [ModalOpen, setModalOpen] = useState(false); // 모달 표시 여부를 제어하는 상태
	const [Index, setIndex] = useState(0); //클릭한 목록요소의 순번을 담을 상태값 생성

	useEffect(() => {
		const method = 'flickr.people.getPhotos';
		const flickr_api = import.meta.env.VITE_FLICKR_API; //'d0053a4bfac353553d2d0337fd052214'; //
		const myID = import.meta.env.VITE_FLICKR_ID; //'201491599@N03'; //
		const num = 10;
		const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;

		//2. muf약자로 의존성 배열이 비어있는 useEffect구문 생성(서버데이터는 컴포넌트 초기 렌더링시 한번만 가져오는 것이 일반적)

		fetch(url)
			.then(data => data.json())
			.then(json => {
				setFlickr(json.photos.photo);
			});
	}, []);

	//	의존성 배열에 Moal Open 상태값을 연결해서 모달창이 열리고 닫힐때마다
	// body요소의 스크롤바 기능 여부를 분기처리
	//정리: 리액트는 HTML,JS작업방식처럼 직접적인 DOM을 제어하는 방식이 아닌 State의 변경에 따라 자동으로 기능이 구현되도록 처리되는 로직을 주로 사용
	//위와 같이 state에 따라 UI의 기능 화면이 변경되는 로직의 패턴을 사용하면
	//복잡한 대단위 프로젝트에서 state상태값만 관리하면 되겡 업무 채산성, 효율성이 높아짐.

	useEffect(() => {
		document.body.style.overflow = ModalOpen ? 'hidden' : 'auto';
	}, [ModalOpen]);

	return (
		<>
			<Layout title={'GALLERY'}>
				<section className='galleryList'>
					{Flickr.map((data, idx) => {
						return (
							<article
								key={idx}
								onClick={() => {
									setModalOpen(true);
									//각 이미지 목록 클릭시 클릭한 idx순번값을 Index상태값에 저장
									setIndex(idx);
								}}>
								<Pic
									src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
									className='pic'
									shadow
								/>
								<h3>{data.title}</h3>
							</article>
						);
					})}
				</section>
			</Layout>

			{ModalOpen && (
				<Modal setModalOpen={setModalOpen}>
					<Pic
						//Pic컴포넌트 src값으로 Flickr전체 배열에서 Index상태 순번의 정보값으로 _b 접미사의 큰 이미지 주소를 Pic에 전달해서 호출
						src={`https://live.staticflickr.com/${Flickr[Index].server}/${Flickr[Index].id}_${Flickr[Index].secret}_b.jpg`}
						shadow
					/>
				</Modal>
			)}
		</>
	);
}
/*
	모달안에 반복 이벤트가 발생한 순번의 요소의 정보를 출력하는 패턴
	
	1. 순서값을 저장할 상태값 생성
	2. 반복 요소에 이벤트 발생시 이벤트가 발생한 요소의 순서값을 상태값에 저장
	3. 모달 안쪽에서 출력해야되는 정보를 순서 상태값에 연동처리
*/
