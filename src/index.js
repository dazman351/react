import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { addPost, updatePost, subscribe } from './redux/state';
import state from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={ addPost } updatePost={ updatePost }/>
		</React.StrictMode>
	);
}

reRender(state);




subscribe(reRender);
 


reportWebVitals();
