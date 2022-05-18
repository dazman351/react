import './App.scss';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import Error from './Components/Error/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  	return (
		<div>
			<BrowserRouter>
				<div className='social__net'>
					<div className='container'>
						<div className='social__inner'>
							<Header />
							<Routes>
								<Route path='/' element={<Profile />} />
								<Route exact path='/dialogs' element={<Messages />} />
								<Route path='#' element={<Error />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
		
		
  	);
}

export default App;



// Главный компонент
