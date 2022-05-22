import { reRender } from './reRender';



let state = {
    profilePage: {
        postData: [
            {id: 1, text: "Wassup guys :)", likes: 2},
            {id: 2, text: "Hey buddy :)", likes: 4},
            {id: 3, text: "How are you?", likes: 10},
            {id: 4, text: "I'm normal, and you?", likes: 22},
            {id: 5, text: "Awesome :)", likes: 3}
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: "Sergey", surname: "Misevich", message: "Когда в Гродно? Ты обещал что бухнем :)" },
            {id: 2, name: "Alexandr", surname: "Onufrik", message: "Привет Антоха. Как работа?)" },
            {id: 3, name: "Igor", surname: "Jvirblya", message: "Соскучился, го бухать Тоха xD" },
            {id: 4, name: "Vadim", surname: "Kalechits", message: "Как там в бассейне?)" },
            {id: 5, name: "Yana", surname: "Prusevich", message: "Удачи работать в школе дальше) Я уволилась)" },
            {id: 6, name: "Julia", surname: "Yurchenko", message: "Приезжай в Гродно, посидим выпьем)" },
            {id: 7, name: "Gena", surname: "Tolochko", message: "Подмени меня в субботу, хорошо?" },
            {id: 8, name: "Anjela", surname: "Turevich", message: "Срочно ко мне в кабинет!!!!!1111!" }
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
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 6,
        text: postMessage,
        likes: 0
    }
    state.profilePage.postData.push(newPost);
    reRender(state);
}




export default state;