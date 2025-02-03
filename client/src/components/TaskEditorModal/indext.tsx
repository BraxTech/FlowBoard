import { FaX } from 'react-icons/fa6';

import ModalContainer from '../ModalContainer';
const TaskEditorModal = () => {
	return (
		<ModalContainer>
			<div className='absolute w-[334px] p-5 h-auto max-h-[625px] rounded text-gray-500 bg-white z-1 mt-5 left-7 top-20 flex flex-col space-y-2 pb-10 right-25 items-center'>
				<p className='font-bold text-[18px] text-black self-start'>
					Add New Task
				</p>
				<label className='font-semibold text-[13px] self-start'>Title</label>
				<input
					type='text'
					placeholder='e.g. Web Design'
					className='border-gray-200 border w-[295px] h-[32px] rounded p-4  text-[13px]'
				/>
				<label
					htmlFor='desciption'
					className='text-[13px] font-semibold self-start'>
					Description
				</label>
				<textarea
					className='border-gray-200 border w-[295px] rounded text-[13px] p-3'
					rows={4}
					placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
				/>
				<p className='text-[13px] font-semibold self-start'>Subtasks</p>
				<div className='flex items-center space-x-3 text-gray-450'>
					<input
						placeholder='e.g. make coffee'
						className='p-5 text-[13px] border-gray-200 rounded border w-[264px] h-[35px]'></input>

					<FaX size={13}></FaX>
				</div>
				<button className=' w-[295px] rounded-3xl h-[40px] text-[13px] font-bold text-primary bg-gray-100'>
					{' '}
					+Add New Subtask
				</button>
				<label
					htmlFor='status'
					className='text-[13px] font-semibold self-start'>
					Status
				</label>
				<select className='rounded border border-gray-200 w-[295px] h-[40px]'></select>
				<button className='bg-primary text-white rounded-3xl w-[295px] h-[40px] text-[13px]'>
					Create Task
				</button>
			</div>
		</ModalContainer>
	);
};

export default TaskEditorModal;
