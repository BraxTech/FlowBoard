import './App.css';
import BoardContainer from './components/BoardContainer';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='bg-gray-200 h-[100vh]'>
			<Navbar />
			<BoardContainer />
		</div>
	);
}

export default App;
