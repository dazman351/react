import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import store from './redux/reduxStore';
import storeContext from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRender = (state) => {
	root.render(
		<React.StrictMode>
			<storeContext.Provider value={store}>
				<App />
			</storeContext.Provider>
		</React.StrictMode>
	);
}

reRender(store.getState());




store.subscribe(() => {
	let state = store.getState();
	reRender(state);
});
 


reportWebVitals();
