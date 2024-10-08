import Layout from '../common/Layout';
import memberData from '../../data/memberData';
import Pic from '../common/Pic';

export default function Members() {
	//h2가상돔 요소 클릭
	const changeColor = () => {
		//changeColor함수가 호출되는 순간 가상 돔요소를 찾는 것이 아닌
		//이전 렌더링 사이클 때 변환된 리얼돔을 직접 가져와서 스타일 변경
		//이처럼 가상돔이 아닌 이전 렌더링 타임에 생성된 리얼돔ㅇㄹ 직접 제어하면 안되는 이유
		// 추적이 안됨
		// 개발은 번거롭지만, 유지보수가 편한게 react의 장점
		// 문제점1.  리액트에서 중요한 정보로 취급하는  state와 연관된 값이 아니라 연관없는 일반 HTML DOM요소를 제어하기 떄문에 추후 데이터 추적 불가
		//문제점2.   현재 렌더링 사이트에서 다루고 있는 최신 요소가 아닌 이전 렌더링때 생성된 요소를 제어하는 것이기 때문에, 잘못된 예전 데이터를 다루게 됨-> 어떤 문제가 발생하게 될 지 모름.
		const pEl = document.querySelector('titBox p');
		pEl.style.color = 'red';
	};

	return (
		<Layout title={'MEMBERS'}>
			<article className='ceoBox'>
				<div className='txt'>
					<h2>{memberData[0].name}</h2>
					<p>{memberData[0].position}</p>
				</div>
				<Pic className='pic' src={'/' + memberData[0].pic} shadow />
			</article>

			<article className='memberListBox'>
				<div className='titBox'>
					<h2 onClick={changeColor}>Our Team Members</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus non ipsa cum. Veritatis, dolore aliquam? Consectetur assumenda dolor labore.</p>
				</div>

				<ul>
					{memberData.map((member, idx) => {
						if (idx !== 0) {
							return (
								<li key={idx}>
									{/* 이미지 컴포넌트 호출후 src에 이미지 url값 전달, pic클래스에는 이미지의 크기정도만 지정 */}
									<Pic src={member.pic} className='pic' shadow={true} />
									<div className='txt'>
										<h2>{member.name}</h2>
										<p>{member.position}</p>
									</div>
								</li>
							);
						}
					})}
				</ul>

				<div className='descBox'>
					<h2>Lorem ipsum dolor sit.</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. A esse cupiditate, vitae deleniti repellat explicabo sit, corrupti beatae dicta, nulla optio corporis alias. Perferendis quidem
						sapiente minima, quisquam inventore soluta.
					</p>
				</div>
			</article>
		</Layout>
	);
}
