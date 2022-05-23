let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, text: "Wassup guys :)", likes: 2},
                {id: 2, text: "Hey buddy :)", likes: 4},
                {id: 3, text: "How are you?", likes: 10},
                {id: 4, text: "I'm normal, and you?", likes: 22},
                {id: 5, text: "Awesome :)", likes: 3}
            ],
            newPostData: ''
        },
    
        messagesPage: {
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
        },
    
        friendsPage: {
            friendsData: [
                {name: 'Sergey', surname: 'Misevich'},
                {name: 'Alexander', surname: 'Onufrik'},
                {name: 'Julia', surname: 'Yurchenko'},
                {name: 'Sergey', surname: 'Potapov'},
                {name: 'Andrey', surname: 'Marchukevich'},
                {name: 'Sergey', surname: 'Shylobod'},
                {name: 'Vadim', surname: 'Kalechits'},
                {name: 'Andrey', surname: 'Tolkach'},
                {name: 'Artem', surname: 'Prokopovich'},
                {name: 'Nikita', surname: 'Lipskiy'}
            ]
        }
    },

    getState() {
        return this._state;
    },


    reRender () {
        console.log("Success");
    },
   
    subscribe (observer) {
        this._reRender = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 6,
                text: this._state.profilePage.newPostData,
                likes: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostData = "";
            this._reRender(this._state)
        } else if (action.type === "UPDATE-TEXT") {
            this._state.profilePage.newPostData = action.updateText;
            this._reRender(this._state);
        } else if (action.type === "UPDATE-MESSAGE") {
            this._state.messagesPage.newMessageText = action.updateMessage;
            this._reRender(this._state)
        } else if (action.type === "SEND-MESSAGE") {
           let text = this._state.messagesPage.newMessageText;
           let newMessage = {
                id: 9, 
                message: text
           }
           this._state.messagesPage.messagesData.push(newMessage);
           this._state.messagesPage.newMessageText = "";
           this._reRender(this._state);
        }
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

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}

export const updateTextActionCreator = (newtext) => {
    return {
        type: 'UPDATE-TEXT', updateText: newtext
    }
}





export default store;