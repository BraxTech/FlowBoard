import { FaX } from 'react-icons/fa6';

import ModalContainer from '../ModalContainer';
const TaskEditorModal = () => {
	return (
		<ModalContainer>
			<div className='absolute w-[334px] p-5 h-auto max-h-[625px] rounded text-gray-500 bg-white z-1 mt-5 mx-auto top-20 flex  items-center md:w-[480px] md:mt-15'>
				<div className='flex flex-col space-y-2  w-[100%] '>
					<p className='font-bold text-[18px] text-black self-start'>
						Add New Task
					</p>
					<label className='font-semibold text-[13px] self-start'>Title</label>
					<input
						type='text'
						placeholder='e.g. Web Design'
						className='border-gray-200 border h-[32px] rounded p-4  text-[13px]'
					/>
					<label
						htmlFor='desciption'
						className='text-[13px] font-semibold self-start'>
						Description
					</label>
					<textarea
						className='border-gray-200 border  rounded text-[13px] p-3'
						rows={4}
						placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
					/>
					<p className='text-[13px] font-semibold self-start'>Subtasks</p>
					<div className='flex items-center space-x-3 text-gray-450'>
						<input
							placeholder='e.g. make coffee'
							className='p-5 text-[13px] border-gray-200 rounded border w-[100%] h-[35px]'></input>

						<FaX size={13}></FaX>
					</div>
					<button className=' w-[295px] md:w-[416px] rounded-3xl h-[40px] text-[13px] font-bold text-primary bg-gray-100 self-center'>
						{' '}
						+Add New Subtask
					</button>
					<label
						htmlFor='status'
						className='text-[13px] font-semibold self-start'>
						Status
					</label>
					<select className='rounded border border-gray-200 w-[295px] md:w-[416px] h-[40px]'></select>
					<button className='bg-primary text-white rounded-3xl w-[295px] md:w-[416px] h-[40px] text-[13px] self-center'>
						Create Task
					</button>
				</div>
			</div>
		</ModalContainer>
	);
};

export default TaskEditorModal;
