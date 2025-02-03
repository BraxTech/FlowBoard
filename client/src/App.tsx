import './App.css';
import BoardContainer from './components/BoardContainer';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='bg-[#F4F7fd] h-[100vh]'>
			<Navbar />
			<BoardContainer />
		</div>
	);
}

export default App;
