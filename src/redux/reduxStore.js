import {combineReducers, legacy_createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsReducer from './friendsReducer';
import allUsersReducer from './allusersReducer';


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    allusersPage: allUsersReducer
});


let store = legacy_createStore(reducers);


export default store;
 



