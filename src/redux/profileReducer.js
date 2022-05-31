


let initialState = {
    postData: [
        {id: 1, text: "Wassup guys :)", likes: 2},
        {id: 2, text: "Hey buddy :)", likes: 4},
        {id: 3, text: "How are you?", likes: 10},
        {id: 4, text: "I'm normal, and you?", likes: 22},
        {id: 5, text: "Awesome :)", likes: 3}
    ],
    newPostData: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD-POST': 
            if (state.newPostData.trim('').length === 0) {
                return alert('Сообщение пустое или его начало с пробела');
            }
            let text = state.newPostData;
            return {
                ...state,
                newPostData: "",
                postData: [...state.postData, {id: 6, text: text, likes: 0}]
            };

        case 'UPDATE-TEXT': 
            return {
                ...state,
                newPostData: action.updateText
            };
        default:
            return state;
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

export default profileReducer;