import Layout from '../common/Layout';

export default function Gallery() {
	return (
		<main className='gallery'>
			<Layout title={'GALLERY'}>
				<p>Gallery Page contents come here.</p>
			</Layout>
		</main>
	);
}
/*
아래만 알아도 React 70%에 해당하는 로직을 이해할 수 있음.

useSTate, useEffect 훅을 이용해서 외부 서버데이터를 가져오고 컴포넌트에 렌더링 하는 패턴
1. 외부데이터를 담을 빈 State공간 상태값과 State변경함수를 useState로부터 생성
2. 의존성 배열이 비어있는 useEffect구문 생성(서버데이터는 컴포넌트 초기 렌더링시 한번만 가져오는 것이 일반적)
3. useEffect구문 안쪽에서 데이터를 요청URL을 생성하기 위한 정보값 변수에 담기
4. useEffect구문 안쪽에서 완성된 요청URL로 fetch함수를 통해 데이터 요청
5. fetch함수의 then구문 안에서 전달받은 서버데이터로부터 배열만 뽑아서 미리 준비해 놓은 State에 State변경함수로 담기
6. Return문 안쪽에서 State값을 map으로 반복돌며 원하는 형태의 JSX로 출력


미션: 
위 패턴을 확인하며 Flickr API로부터 내 갤러리 데이터를 화면에 출력 시도

*/
