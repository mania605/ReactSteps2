//Hook에서 함수를 Return하는 이유
//여러 컴퍼너트에서 동시다발적으로 호출해야 되는데
//특정 컴포넌트마다 호출될 때 필요한 고유정보값을 계속 유지해야됨.
//Clouser 환경 필요
//함수 안쪽에 지역변수를 만들고 그 지역변수를 활용하는함수를 리턴하면
//Lexical Scope환경이 설정됨.
//Lexical Scope환경이란
//안쪽의 지역변수가 계속 값이 유지되는 현상
export default function UseSplitText() {
	return () => {};
}
