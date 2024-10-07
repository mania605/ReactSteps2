export default function Modal({ children, setModalOpen, closeModal, selectedImg }) {
	return (
		<aside className='modal'>
			<div className='con'>
				{children}

				<img src={selectedImg} alt='Selected' />
			</div>
			<button className='btnClose' onClick={() => setModalOpen(false)}>
				CLOSE
			</button>
			<button className='btnClose' onClick={closeModal}>
				CLOSE
			</button>
		</aside>
	);
}
