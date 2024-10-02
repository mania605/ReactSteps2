// import Layout from '../common/Layout';
// import memberData from '../../data/memberData';
// export default function Members() {
// 	console.log(memberData);
// 	return (
// 		<Layout title={'MEMBERS'}>
// 			<div className="ceoBox"></div>
// 			{memberData.map((member, idx) => {
// 				return (
// 					<article key={idx}>
// 						<div className='pic'>
// 							<img src={'/' + member.pic} alt={member.name} />
// 						</div>

// 						<div className='txt'>
// 							<h2> {member.name} </h2>
// 							<p>{member.position}</p>
// 						</div>
// 					</article>
// 				);
// 			})}
// 		</Layout>
// 	);
// }

// //미션 위의 7개 배열 중에서 첫번째 데이터만 뽑아서 기존 ceoBox안쪽으로 출력하고 첫번째를 제외한 나머지 6개 데이타만 기존 반복문구안에서 출력

import Layout from '../common/Layout';
import memberData from '../../data/memberData';

export default function Members() {
	return (
		<Layout title={'MEMBERS'}>
			{/* map을 한 번만 사용해서 첫 번째 멤버는 ceoBox에, 나머지는 일반 출력 */}
			{memberData.map((member, idx) => {
				// 첫 번째 멤버는 ceoBox에 출력
				if (idx === 0) {
					return (
						<div className='ceoBox' key={idx}>
							<article>
								<div className='pic'>
									<img src={'/' + member.pic} alt={member.name} />
								</div>
								<div className='txt'>
									<h2>{member.name}</h2>
									<p>{member.position}</p>
								</div>
							</article>
						</div>
					);
				}

				// 나머지 멤버들은 일반 출력
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={'/' + member.pic} alt={member.name} />
						</div>
						<div className='txt'>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
