import './../../../App.scss';
import { addPostActionCreator, updateTextActionCreator } from './../../../redux/profileReducer';
import Posts from './Posts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostData: state.profilePage.newPostData
    }
}

let mapDispatchToProps = (dispatch) => {
    return  {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateText: (newtext) => {
            dispatch(updateTextActionCreator(newtext));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;