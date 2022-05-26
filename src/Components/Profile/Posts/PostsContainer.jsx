import './../../../App.scss';
import { addPostActionCreator, updateTextActionCreator } from './../../../redux/profileReducer';
import Posts from './Posts';
import storeContext from './../../../storeContext';




const PostsContainer = () => {

    return  (
        <storeContext.Consumer> 
            {
                (store) => {

                    let state = store.getState();
    
    
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
    
                    let updateText = (newtext) => {
                        let action = updateTextActionCreator(newtext);
                        store.dispatch(action);
                        
                    }
                    return  <Posts  newPostData={state.profilePage.newPostData}
                                addPost={ addPost } 
                                updateText={ updateText }
                                postData={state.profilePage.postData} /> 
                    }
            }
        </storeContext.Consumer>
    );  
}

export default PostsContainer;