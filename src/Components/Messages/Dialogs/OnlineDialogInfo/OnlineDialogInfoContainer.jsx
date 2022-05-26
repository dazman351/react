import './../../../../App.scss';
import OnlineDialogInfo from './OnlineDialogInfo';
import { sendMessageActionMessage, updateTextActionMessage } from './../../../../redux/messagesReducer';




const OnlineDialogInfoContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionMessage());
    }

    let changeMessage = (newtext) => {
        let action = updateTextActionMessage(newtext);
        props.store.dispatch(action);
    }


    return <OnlineDialogInfo    sendMessage={ sendMessage } 
                                changeMessage={ changeMessage } 
                                newMessageText={state.messagesPage.newMessageText}
                                messagesData={state.messagesPage.messagesData}/>

}


export default OnlineDialogInfoContainer;