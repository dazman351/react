import './../../../../App.scss';
import OnlineDialogInfo from './OnlineDialogInfo';
import { sendMessageActionMessage, updateTextActionMessage } from './../../../../redux/messagesReducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesData: state.messagesPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionMessage());
        },
        changeMessage: (newtext) => {
            dispatch(updateTextActionMessage(newtext));
        }
    }
}


const OnlineDialogInfoContainer = connect(mapStateToProps, mapDispatchToProps) (OnlineDialogInfo);


export default OnlineDialogInfoContainer;