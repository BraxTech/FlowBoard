import logo from '../../assets/logo.png';
import { FaPlus, FaChevronDown, FaEllipsisVertical } from 'react-icons/fa6';
const Navbar = () => {
	return (
		<div className='h-[64px] flex items-center justify-between space-x-3 bg-white'>
			<div className='flex items-center space-x-5'>
				<img
					src={logo}
					alt=''
					className='h-[24px] w-[25px] ml-3'
				/>
				<div className='flex items-center'>
					<p className='font-bold'>Board Name</p>
					<FaChevronDown className='size-3 text-primary font-bold ml-1' />
				</div>
			</div>
			<div className='flex items-center'>
				<button className='bg-primary text-white rounded-full w-[48px] h-[32px] text-2xl font-bold flex items-center justify-center '>
					<FaPlus className='size-4' />
				</button>
				<FaEllipsisVertical className='size-5 mx-1 text-gray-500' />
			</div>
		</div>
	);
};

export default Navbar;
