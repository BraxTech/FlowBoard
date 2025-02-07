import { FaSun, FaCircle, FaMoon } from 'react-icons/fa6';
const DarkModeToggle = () => {
	return (
		<div className='bg-secondary rounded w-[200px] h-[48px] self-center flex items-center justify-center'>
			<FaSun size={20} />
			<button className=' rounded-3xl w-[55px] mx-5 p-[3px] bg-primary'>
				<FaCircle className='text-white size-5' />
			</button>
			<FaMoon size={20} />
		</div>
	);
};

export default DarkModeToggle;
