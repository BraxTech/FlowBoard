import './App.css';
import BoardContainer from './components/BoardContainer';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
function App() {
	return (
		<div className='h-screen w-full flex overflow-hidden'>
			<SideBar />

			<Navbar />

			<BoardContainer />
		</div>
	);
}

export default App;
