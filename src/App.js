import './App.scss';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';

const App = () => {
  	return (
		<div className='social__net'>
			<div className='container'>
				<div className='social__inner'>
					<Header />
					<Profile />
				</div>
			</div>
		</div>
  	);
}

export default App;
