import './../../../../App.scss';
import OnlineDialogInfo from './OnlineDialogInfo';
import { sendMessageActionMessage, updateTextActionMessage } from './../../../../redux/messagesReducer';
import storeContext from './../../../../storeContext';




const OnlineDialogInfoContainer = () => {

    return (
        <storeContext.Consumer> 
            {
                (store) => {

                    let state = store.getState();
    
                    let sendMessage = () => {
                        store.dispatch(sendMessageActionMessage());
                    }
                
                    let changeMessage = (newtext) => {
                        let action = updateTextActionMessage(newtext);
                        store.dispatch(action);
                    }
                    return  <OnlineDialogInfo   sendMessage={ sendMessage } 
                                                changeMessage={ changeMessage } 
                                                newMessageText={state.messagesPage.newMessageText}
                                                messagesData={state.messagesPage.messagesData}/>
                    } 
            }
        </storeContext.Consumer>
    );

}


export default OnlineDialogInfoContainer;