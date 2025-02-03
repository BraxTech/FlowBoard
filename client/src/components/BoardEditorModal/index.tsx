import ModalContainer from '../ModalContainer';
import { FaX } from 'react-icons/fa6';
const BoardEditorModal = () => {
	return (
		<ModalContainer>
			<div className='absolute w-[334px] p-5 h-auto max-h-[625px] rounded text-gray-500 bg-white z-1 mt-5 left-7 top-20 flex flex-col  pb-10 right-25 items-center space-y-3'>
				<p className='self-start text-black font-bold'>Add New Board</p>
				<label
					htmlFor=''
					className='text-[13px] font-semibold self-start '>
					Board Name
				</label>
				<input
					placeholder='e.g. Web Design'
					type='text'
					className='border border-gray-300 w-[295px] h-[35px] rounded p-4'
				/>
				<label
					htmlFor=''
					className='text-[13px] font-semibold self-start'>
					{' '}
					Board Columns
				</label>
				<div className='flex items-center space-x-3'>
					<input
						type='text'
						placeholder='e.g. Todo'
						className='border border-gray-300 p-1 px-3 text-[13px] rounded h-[35px] w-[264px] '
					/>
					<FaX></FaX>
				</div>
				<button className='bg-primary w-[295px] h-[40px] rounded-3xl text-white'>
					+ Add New Column
				</button>
				<button className='bg-primary rounded-3xl text-white text-[14px] h-[40px] w-[295px] font-semibold'>
					Create New Board
				</button>
			</div>
		</ModalContainer>
	);
};

export default BoardEditorModal;
