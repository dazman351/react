let initialState = {
    dialogsData: [
        {id: 1, name: "Sergey", surname: "Misevich"},
        {id: 2, name: "Alexandr", surname: "Onufrik"},
        {id: 3, name: "Igor", surname: "Jvirblya"},
        {id: 4, name: "Vadim", surname: "Kalechits"},
        {id: 5, name: "Yana", surname: "Prusevich"},
        {id: 6, name: "Julia", surname: "Yurchenko"},
        {id: 7, name: "Gena", surname: "Tolochko",},
        {id: 8, name: "Anjela", surname: "Turevich"}
    ],

    newMessageText: "",

    messagesData: [
        {id: 1, message: "Когда в Гродно? Ты обещал что бухнем :)" },
        {id: 2, message: "Привет Антоха. Как работа?)" },
        {id: 3, message: "Соскучился, го бухать Тоха xD" },
        {id: 4, message: "Как там в бассейне?)" },
        {id: 5, message: "Удачи работать в школе дальше) Я уволилась)" },
        {id: 6, message: "Приезжай в Гродно, посидим выпьем)" },
        {id: 7, message: "Подмени меня в субботу, хорошо?" },
        {id: 8, message: "Срочно ко мне в кабинет!!!!!1111!" }
    ]
}



const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case "UPDATE-MESSAGE": {
            let copystate = {...state};
            copystate.newMessageText = action.updateMessage;
            return copystate;
        }
        case "SEND-MESSAGE": {
            if (state.newMessageText.trim('').length === 0) {
                return alert('Сообщение пустое или его начало с пробела');
            }
            let text = state.newMessageText;
            let newMessage = {
                id: 9, 
                message: text
            }
            let copystate = {...state};
            copystate.messagesData = [...state.messagesData];
            copystate.messagesData.push(newMessage);
            copystate.newMessageText = "";
            return copystate;
        }

        default:
            return state;
    }
}


export const sendMessageActionMessage = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}

export const updateTextActionMessage = (newtext) => {
    return {
        type: 'UPDATE-MESSAGE', updateMessage: newtext
    }
}

export default messagesReducer;