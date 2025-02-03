import { FaEllipsisVertical } from 'react-icons/fa6';
import ModalContainer from '../ModalContainer';
const TaskModal = () => {
	return (
		<ModalContainer>
			<div className='absolute w-[343px] h-auto max-h-[625px] rounded-2xl bg-white z-1 mt-5 left-9 top-10 flex flex-col space-y-2 pb-10'>
				<div className='flex items-center'>
					<h1 className='w-[274px] text-left text-[18px] font-bold ml-6 mt-6'>
						Research pricing points of various competiors and trial different
						business models
					</h1>
					<FaEllipsisVertical className='size-5 text-gray-500' />
				</div>
				<p className='text-[13px] text-left w-[295px] ml-5'>
					We know what we're planning to build for version one. Now we need to
					finalize the first pricing model we'll use. Keep iterating the subtask
					until we have a coherant propostion.
				</p>
				<p className='text-[12px] ml-5 mt-5 font-semibold text-gray-500'>
					Subtask (2 of 3)
				</p>
				<div className='flex items-center bg-gray-100 w-[295px] h-[59px] space-x-2 ml-5 pl-3'>
					<input
						type='checkbox'
						name=''
						id=''
					/>
					<label className='text-[12px] font-bold text-gray-500'>
						Research competitor pricing and business models
					</label>
				</div>
				<label
					htmlFor=''
					className='ml-5 text-[12px] font-bold text-gray-500'>
					{' '}
					Current Status
				</label>
				<select
					className='border w-[295px] h-[40px] ml-5'
					name=''
					id=''>
					<option value='Doing'>Doing</option>
				</select>
			</div>
		</ModalContainer>
	);
};

export default TaskModal;
