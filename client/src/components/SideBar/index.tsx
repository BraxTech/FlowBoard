import logo from '../../assets/logo.png';
import { FaRegEyeSlash } from 'react-icons/fa6';
import BoardButton from '../BoardButton';
import DarkModeToggle from '../DarkModeToggle';

const SideBar = () => {
	return (
		<div className='w-[300px] h-full bg-white hidden md:flex flex-col justify-between mr-[2px] z-1'>
			<div className='flex flex-col'>
				<div className='flex space-x-3 py-5 px-8 items-center'>
					<img
						src={logo}
						alt=''
						className='w-[30px] h-[30px]'
					/>
					<p className='font-bold text-[30px]'> flowboard</p>
				</div>
				<p className='ml-6 mb-4 text-[14px] font-semibold text-gray-400 letter-spacing-2'>
					ALL BOARDS (3)
				</p>
				<BoardButton />
			</div>
			<div className='flex flex-col'>
				<DarkModeToggle />
				<div className='w-auto flex  pl-11 pb-8 text-gray-500 items-center space-x-2 mt-5 '>
					<FaRegEyeSlash />
					<p className='text-[15px] font-semibold'>Hide Sidebar</p>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
