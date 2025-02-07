import { FaEllipsisVertical } from 'react-icons/fa6';
import ModalContainer from '../ModalContainer';
const TaskModal = () => {
	return (
		<ModalContainer>
			<div className='absolute w-[343px] h-auto max-h-[625px] rounded bg-white z-1 mt-5 p-5 top-30 space-y-2  md:w-[480px]  md:top-50 flex justify-center md:p-10 md:pt-5 md:mt-0 md:mr-0'>
				<div className='w-[295px] md:w-[415px]   flex flex-col space-y-2'>
					<div className='flex items-center p-2  '>
						<h1 className=' text-left text-[18px] md:w-[386px] font-bold'>
							Research pricing points of various competiors and trial different
							business models
						</h1>
						<FaEllipsisVertical className='size-5 text-gray-500' />
					</div>
					<div className=''>
						<p className='text-[13px] text-left'>
							We know what we're planning to build for version one. Now we need
							to finalize the first pricing model we'll use. Keep iterating the
							subtask until we have a coherant propostion.
						</p>
					</div>
					<p className='text-[12px]  mt-5 font-semibold text-gray-500'>
						Subtask (2 of 3)
					</p>
					<div className='flex items-center bg-gray-100  h-[59px] space-x-2  pl-3'>
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
						className=' text-[12px] font-bold text-gray-500'>
						{' '}
						Current Status
					</label>
					<select
						className='border  h-[40px] '
						name=''
						id=''>
						<option value='Doing'>Doing</option>
					</select>
				</div>
			</div>
		</ModalContainer>
	);
};

export default TaskModal;
