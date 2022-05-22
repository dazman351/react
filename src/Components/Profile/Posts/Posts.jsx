import './../../../App.scss';
import Post from './Post/Post';
import React from 'react';


const Posts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let newtext = newPostElement.current.value;
        props.updatePost(newtext);
        
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