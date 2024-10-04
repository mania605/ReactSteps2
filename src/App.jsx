import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/main/Home';
import Gallery from './components/sub/Gallery';
import Members from './components/sub/Members';
import Posts from './components/sub/Posts';
import Youtube from './components/sub/Youtube';
import YoutubeDetail from './components/sub/YoutubeDetail';
import Contact from './components/sub/Contact';
import { Route, Routes } from 'react-router-dom';
import YoutubeDetail from './components/sub/YoutubeDetail';

export default function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/members' element={<Members />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/youtube' element={<Youtube />} />
				<Route path='/youtube/:id' element={<YoutubeDetail />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/posts' element={<Posts />} />
			</Routes>

			<Footer />
		</>
	);
}

/*
	다이나믹 라우터 (상세페이지 제작)
	-라우터 연결시 path경로를 /패스명/:파라미터
	-특정 url경로 접속시 파라미터명으로 특정 값 전달
*/

/*
	SSR방식 (HTML파일 불러오는 방식)
	Server Side Rendering 
	- 각각의 서브 페이지를 index.html, sub1.hmtl, sub2.html형식으로 분리한 방식
	- 각 메뉴 클릭시 일일이 서버쪽에 요청해서 해당 html파일을 가져오는 방식

	CSR방식 (React 작업방식)
	Client Side Rendering
	- 처음에 서버로부터 빈 index.html파일 초기에 한번 가져옴
	- 이때 컴파일완료된 리액트 컴포넌트 자바스크립트 파일도 한번에 모두 가져옴
	- 이후 부터는 메뉴를 클릭할때마 서버쪽에 정보를 불러오는 것이아닌
	- 클라이언트단에서 미리 한번에 불러온 컴포넌트 요소들을 실시간으로 index.html안쪽에서 바꿔치기
*/
