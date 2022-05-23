import './../../../App.scss';
import Post from './Post/Post';
import React from 'react';
import { updateTextActionCreator } from '../../../redux/state';
import { addPostActionCreator } from './../../../redux/state';




const Posts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newtext = newPostElement.current.value;
        let action = updateTextActionCreator(newtext);
        props.dispatch(action);
        
    }

    let postMap = props.postData.map(post => <Post text={post.text} likes={post.likes}/>)

    return (
        <div className='profile__input'>
            Напишите ваше первое сообщение: <input
                                    placeholder='Введите текст'
                                    onChange={onPostChange} 
                                    ref={newPostElement} 
                                    value={ props.newPostData } />
            <button onClick={ addPost }>Send</button>
            <div className='profile__posts'>
                { postMap }
            </div>
        </div>
    );
}

export default Posts;