import logo from '../../assets/logo.png';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/16/solid';
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';
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
					<ChevronDownIcon className='size-5 text-[#635FC7]' />
				</div>
			</div>
			<div className='flex items-center'>
				<button className='bg-[#A8A4FF] text-white rounded-full w-[48px] h-[32px] text-2xl font-bold flex items-center justify-center '>
					<PlusIcon className='size-5' />
				</button>
				<EllipsisVerticalIcon className='size-6 mx-1 text-gray-500' />
			</div>
		</div>
	);
};

export default Navbar;
