import React from 'react';
import { FaTable } from 'react-icons/fa6';
const BoardButton = () => {
	return (
		<div>
			<div className='bg-primary w-[240px] h-[48px] rounded-3xl rounded-l-none text-white items-center space-x-2 p-5 gap-3 flex'>
				<FaTable size={20}></FaTable>
				Board Name
			</div>
		</div>
	);
};

export default BoardButton;
