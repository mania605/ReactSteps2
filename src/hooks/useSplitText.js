export default function useSplitText() {
	return ref => {
		let text = ref.current.innerText;
		let tags = '';
		let count = 0;

		for (let letter of text) {
			tags += `<span style='display:inline-block; transition-duration:0.5s; transition-delay:${count * interval}'>${letter}</span>`;
			count++;
		}

		ref.current.innerHTML = tags;

		//매번 호출하는 부모 컴포넌트에서 on을 추가하는 구문이 번거로우므로
		//훅 자체적으로 해당 요소 자체에 on을 추가
		setTimeout(() => {
			ref.current.classList.add('on');
		}, 100);
	};
}
/*
  setTimeout의 delay값을 0으로만 줘도 연결된 콜백함수는 web api실행 후
  task queue를 거쳐 callstack으로 넘어가게 됨
  따라서 해당 코드는 ref.current.innerHTML = tags; 실행된뒤 호출됨 (동기화됨)
  그럼에도 불구하고 100이라는 지연시간을 준 이유는
  동기화 시점이 innerHTML로 동적 요소를 넣는 호출 시점일 뿐
  실제 동적으로 DOM이 최종 생성된 시점 이후를 보장하진 않기 때문에
  물리적으로 실제 돔으로 변환될 약간의 시간을 확보하기 위함



  동기화:이전작업 끝나고 다음게 진행됨
  비동기화: 작업순서가 어그러지는 것
  비동기화가 일어나는 이유 영상 볼 것

*/
