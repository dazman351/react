import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={ store.addPost.bind(store) } updatePost={ store.updatePost.bind(store) }/>
		</React.StrictMode>
	);
}

reRender(store.getState());




store.subscribe(reRender);
 


reportWebVitals();
