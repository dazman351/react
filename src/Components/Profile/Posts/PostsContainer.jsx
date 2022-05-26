import './../../../App.scss';
import { addPostActionCreator, updateTextActionCreator } from './../../../redux/profileReducer';
import Posts from './Posts';




const PostsContainer = (props) => {

    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateText = (newtext) => {
        let action = updateTextActionCreator(newtext);
        props.store.dispatch(action);
        
    }

    return <Posts   newPostData={state.profilePage.newPostData}
                    addPost={ addPost } 
                    updateText={ updateText }
                    postData={state.profilePage.postData} />
}

export default PostsContainer;