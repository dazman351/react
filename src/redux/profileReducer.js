


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
            let newPost = {
                id: 6,
                text: state.newPostData,
                likes: 0
            }
            state.postData.push(newPost);
            state.newPostData = "";
            return state;

        case 'UPDATE-TEXT':
            state.newPostData = action.updateText;
            return state;

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