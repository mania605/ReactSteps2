{
	/*
import Layout from '../common/Layout';
import memberData from '../../data/memberData';
export default function Members() {
	console.log(memberData);
	return (
		<Layout title={'MEMBERS'}>
			<p>Members Page contents come here.</p>
			{/* <article>
				<div className="pic">
					<img src="이미지" alt="" />
				</div>
				<div className="txt">
					<h2>사람 이름</h2>
					<p>직책</p>
				</div>
			</article> 
		</Layout>);
}
*/
}

import Layout from '../common/Layout';
import memberData from '../../data/memberData';

export default function Members() {
	console.log(memberData);
	return (
		<Layout title={'MEMBERS'}>
			<p>Members Page contents come here.</p>
			{memberData.map((member, idx) => (
				<article key={idx}>
					<div className='pic'>
						<img src={`/public/${member.pic}`} alt={member.name} />
					</div>
					<div className='txt'>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</div>
				</article>
			))}
		</Layout>
	);
}
