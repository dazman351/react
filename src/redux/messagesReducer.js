


const messagesReducer = (state, action) => {

    switch(action.type) {
        case "UPDATE-MESSAGE":
            state.newMessageText = action.updateMessage;
            return state;
        case "SEND-MESSAGE":
            if (state.newMessageText === "") {
                return state;
            }
            let text = state.newMessageText;
            let newMessage = {
                id: 9, 
                message: text
            }
            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;

        default:
            return state;
    }
}

export default messagesReducer;