import React from 'react';

const TaskModal = () => {
	return (
		<div className='absolute w-[343px] h-[557px] rounded-2xl bg-white z-2 mt-5 ml-3'>
			<h1 className='w-[274px] text-left text-[18px] font-bold ml-6 mt-3'>
				Research pricing points of various competiors and trial different
				business models
			</h1>
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
	);
};

export default TaskModal;
