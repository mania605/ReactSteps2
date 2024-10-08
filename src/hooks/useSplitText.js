//Hook에서 함수를 Return하는 이유
//여러 컴퍼너트에서 동시다발적으로 호출해야 되는데
//특정 컴포넌트마다 호출될 때 필요한 고유정보값을 계속 유지해야됨.
//Clouser 환경 필요
//함수 안쪽에 지역변수를 만들고 그 지역변수를 활용하는함수를 리턴하면
//Lexical Scope환경이 설정됨.
//Lexical Scope환경이란
//안쪽의 지역변수가 계속 값이 유지되는 현상

export default function UseSplitText() {
	//내부적으로 current값을 직접 추출하기 때문에 호출시 참조객체명만 전달
	return ref => {
		//인수로 전달받은 참조객체안의 요소의 텍스트만 가져옴
		let text = ref.current.innerText; // 동적으로 생성될 태그문자열이 담길 빈 변수 생성
		let tags = ''; //빈문자열 초기화
		for (let letter of text) {
			//문자열 반복돌면서 동적으로 <span>요소로 감싸면서 문자열 쌓아나감
			tags += '<span>${letter}</span>';
		}

		ref.current.innerHTML = tags; //tag문자열이 완성되면 ref참조 요소 안쪽에 변경된 문자열 DOM구조 바꿔치기
	};
}
