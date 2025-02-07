import TaskColumn from '../TaskColumn';
import BoardSwitcherModal from '../BoardSwitcherModal';
import DeleteModal from '../DeleteModal';
import BoardEditorModal from '../BoardEditorModal';
import TaskModal from '../TaskModal';
import TaskEditorModal from '../TaskEditorModal';
const BoardContainer = () => {
	return (
		<div className='flex h-screen w-screen overflow-x-auto  fixed'>
			{/* <div className='flex flex-grow w-full lg:justify-center mr-135  md:mr-0  md:ml-150 items-center lg:mx-auto  '>
				<div className='flex flex-col items-center text-center'>
					<p className='text-[18px] w-[300px] md:w-100 mb-5 lg:text-[20px] font-bold text-gray-400'>
						This board is empty. Create a new column to get started.
					</p>
					<button className='bg-primary text-white w-[174px] h-[48px] rounded-3xl'>
						+ Add New Column
					</button>
				</div>
			</div> */}
			{/* <TaskModal /> */}
			{/* <TaskEditorModal /> */}
			{/* <BoardEditorModal /> */}
			{/* <DeleteModal /> */}

			{/* <BoardSwitcherModal /> */}
			<div className='flex  pt-12 md:pl-80 md:pr-10'>
				<TaskColumn />
				<TaskColumn />
			</div>
		</div>
	);
};

export default BoardContainer;
