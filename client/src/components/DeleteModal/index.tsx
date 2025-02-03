import ModalContainer from '../ModalContainer';

const DeleteModal = () => {
	return (
		<ModalContainer>
			<div className='absolute w-[334px] p-5 h-auto max-h-[625px] rounded text-gray-500 bg-white z-1 mt-5 left-7 top-20 flex flex-col  pb-10 right-25 items-center space-y-3'>
				<p className='self-left text-red-500 font-bold'>Delete this board?</p>
				<p className='text-[13px] text-left'>
					Are you sure you want to delete the ‘Platform Launch’ board? This
					action will remove all columns and tasks and cannot be reversed.
				</p>
				<button className='bg-red-500 text-white rounded-3xl w-[295px] h-[40px] text-[13px] font-semibold'>
					Delete
				</button>

				<button className='text-primary bg-gray-100 rounded-3xl w-[295px] h-[40px] text-[13px] font-semibold'>
					Cancel
				</button>
			</div>
		</ModalContainer>
	);
};

export default DeleteModal;
