import './App.scss';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Error from './Components/Error/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnlineDialog from './Components/Messages/Dialogs/OnlineDialog';
import MessagesContainer from './Components/Messages/MessagesContainer';
import FriendsContainer from './Components/Friends/FriendsContainer';



const App = (props) => {
  	return (
		<div>
			<BrowserRouter>
				<div className='social__net'>
					<div className='container'>
						<div className='social__inner'>
							<Header />
							<Routes>
								<Route path='/' element={<Profile/>} />
								<Route exact path='/dialogs' element={<MessagesContainer />} />
								<Route path='/dialogs/:id' element={<OnlineDialog />} />
								<Route path="/friends" element={<FriendsContainer />} />
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
