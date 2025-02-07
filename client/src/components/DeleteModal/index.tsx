import ModalContainer from '../ModalContainer';

const DeleteModal = () => {
	return (
		<ModalContainer>
			<div className='absolute w-[334px] p-5 h-auto max-h-[625px] rounded text-gray-500 bg-white z-1   justify-center flex flex-col  pb-10  items-center space-y-3 md:w-[500px]'>
				<p className='self-left text-destructive font-bold w-[100%] text-[18px]'>
					Delete this board?
				</p>
				<p className='text-[13px] text-left text-gray-400 font-semibold'>
					Are you sure you want to delete the ‘Platform Launch’ board? This
					action will remove all columns and tasks and cannot be reversed.
				</p>
				<button className='bg-destructive text-white rounded-3xl w-[295px] h-[40px] text-[13px] font-semibold'>
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
