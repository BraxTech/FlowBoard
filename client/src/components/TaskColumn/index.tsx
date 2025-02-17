import React from 'react';
import TaskCard from '../TaskCard';
import { FaCircle } from 'react-icons/fa6';
const TaskColumn = () => {
	return (
		<div className='flex flex-col space-y-4 ml-5 mt-8 mr-2'>
			<div className='flex items-center justify-start  w-[264px] space-x-1.5 text-[14px] font-semibold tracking-[3px] text-gray-500 z-0 '>
				<FaCircle className='text-green-300' />
				<p>Title</p>
				<p>(4)</p>
			</div>
			<TaskCard />
		</div>
	);
};

export default TaskColumn;
