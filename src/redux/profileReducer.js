


const profileReducer = (state, action) => {

    switch(action.type) {
        case 'ADD-POST':
            if (state.newPostData === "") {
                return state;
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

export default profileReducer;