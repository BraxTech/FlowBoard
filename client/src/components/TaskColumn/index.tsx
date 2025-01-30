import React from 'react';
import TaskCard from '../Task Card';
import { FaCircle } from 'react-icons/fa6';
const TaskColumn = () => {
	return (
		<div className='flex flex-col space-y-4 ml-5 mt-8'>
			<div className='flex items-center justify-start  w-[264px] space-x-1.5 text-[14px] font-bold tracking-widest'>
				<FaCircle className='text-green-300' />
				<p>Title</p>
				<p>(4)</p>
			</div>
			<TaskCard />
		</div>
	);
};

export default TaskColumn;
