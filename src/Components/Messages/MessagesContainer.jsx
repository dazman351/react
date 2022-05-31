import { connect } from "react-redux";
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}



const MessagesContainer = connect(mapStateToProps) (Messages);


export default MessagesContainer;