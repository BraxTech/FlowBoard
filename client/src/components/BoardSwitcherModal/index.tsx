import { FaTable } from 'react-icons/fa';
import { FaSun, FaMoon, FaCircle } from 'react-icons/fa6';

const BoardSwitcherModal = () => {
	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-start z-1 top-16  md:hidden'>
			<div className='absolute w-[264px] py-5  h-auto max-h-[625px] rounded-xl text-gray-500 bg-white z-1  left-7 top-4 flex flex-col  pb-10 right-25 items-start space-y-3 '>
				<p className='pl-5'>All Boards (2)</p>
				<div className='bg-primary w-[240px] h-[48px] rounded-3xl rounded-l-none text-white items-center space-x-2 p-5 gap-3 flex'>
					<FaTable size={20}></FaTable>
					Board Name
				</div>
				<div className='bg-white text-gray-500 w-[240px] h-[48px] rounded-3xl rounded-l-none  items-center space-x-2 p-5 gap-3 flex'>
					<FaTable size={20}></FaTable>
					<p>Marketing Plan</p>
				</div>
				<div className='bg-white text-gray-500 w-[240px] h-[48px] rounded-3xl rounded-l-none  items-center space-x-2 p-5 gap-3 flex'>
					<FaTable size={20}></FaTable>
					<p className='text-primary font-bold'>+ Create New Board</p>
				</div>
			</div>
		</div>
	);
};

export default BoardSwitcherModal;
