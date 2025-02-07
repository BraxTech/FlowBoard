import logo from '../../assets/logo.png';
import {
	FaPlus,
	FaChevronDown,
	FaChevronUp,
	FaEllipsisVertical,
} from 'react-icons/fa6';
const Navbar = () => {
	return (
		<div className='h-[64px] absolute w-screen flex-grow flex items-center justify-between space-x-3  bg-white  md:mb-0 '>
			<div className='flex items-center space-x-5'>
				<img
					src={logo}
					alt=''
					className='h-[24px] w-[25px] ml-3 md:hidden'
				/>
				<div className='flex items-center'>
					<p className='font-bold md:ml-5 md:text-[20px]'>Board Name</p>
					<FaChevronUp className='size-3 text-primary font-bold ml-1 md:hidden' />
				</div>
			</div>
			<div className='flex items-center'>
				<button className='bg-primary text-white rounded-full w-[48px] h-[32px]  text-2xl font-bold flex items-center justify-center md:w-[164px] md:text-[12px] md:p-5 '>
					<FaPlus className='size-4 md:size-3 md:mr-2' />
					<p className='hidden md:block'>Add New Task</p>
				</button>
				<FaEllipsisVertical className='size-5 mx-1 text-gray-500' />
			</div>
		</div>
	);
};

export default Navbar;
