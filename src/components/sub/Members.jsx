import Layout from '../common/Layout';
import memberData from '../../data/memberData';
export default function Members() {
	console.log(memberData);
	return (
		<Layout title={'MEMBERS'}>
			{memberData.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={'/' + member.pic} alt={member.name} />
						</div>

						<div className='txt'>
							<h2> {member.name} </h2>
							<p>{member.position}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
