import {combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsReducer from './friendsReducer';


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer
});


let store = legacy_createStore(reducers);


export default store;
 



