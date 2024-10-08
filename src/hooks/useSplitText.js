export default function useSplitText() {
	return (ref, interval = 0, delay = 0) => {
		// 세 번째 파라미터 추가 (delay)
		let text = ref.current.innerText;
		let tags = '';
		let count = 0;

		for (let letter of text) {
			tags += `<span style='display:inline-block; transition-duration:0.5s; transition-delay:${count * interval}s'>${letter}</span>`;
			count++;
		}

		ref.current.innerHTML = tags;

		setTimeout(() => {
			ref.current.classList.add('on');
		}, delay); // delay로 모션 시작 시점을 제어
	};
}
