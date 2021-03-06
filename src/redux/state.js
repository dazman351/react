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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage);
        this._state.friendsPage = friendsReducer(this._state.friendsPage);

        this._reRender(this._state);
    }

}

