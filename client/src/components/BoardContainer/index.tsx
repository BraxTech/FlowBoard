import TaskColumn from '../TaskColumn';

const BoardContainer = () => {
	return (
		<div className='flex  m-auto h-[100vh] '>
			{/* <p className='text-[18px] w-[300px] text-center'>
				This board is empty. Create a new column to get started.
			</p>
			<button className='bg-primary text-white w-[174px] h-[48px] rounded-3xl '>
				+ Add New Column
			</button> */}
			{/* <TaskModal /> */}
			{/* <TaskEditorModal /> */}
			{/* <BoardEditorModal /> */}
			{/* <DeleteModal /> */}
			{/* <BoardSwitcherModal /> */}
			<TaskColumn />
			<TaskColumn />
		</div>
	);
};

export default BoardContainer;
