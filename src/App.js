import './App.scss';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import Error from './Components/Error/Error';
import Friends from './Components/Friends/Friends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnlineDialog from './Components/Messages/Dialogs/OnlineDialog';



const App = (props) => {
  	return (
		<div>
			<BrowserRouter>
				<div className='social__net'>
					<div className='container'>
						<div className='social__inner'>
							<Header />
							<Routes>
								<Route path='/' element={<Profile store={props.store} />} />
								<Route exact path='/dialogs' element={<Messages 
													dialogsData={props.state.messagesPage.dialogsData} />} />
								<Route path='/dialogs/:id' element={<OnlineDialog store={props.store}/>} />
								<Route path="/friends" element={<Friends 
													friendsData={props.state.friendsPage.friendsData} />} />
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
