import './../../../App.scss';
import Post from './Post/Post';
import React from 'react';


const Posts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    let postMap = props.postData.map(post => <Post text={post.text} likes={post.likes}/>)

    return (
        <div className='profile__input'>
            Напишите ваше первое сообщение: <input type="text" ref={newPostElement} />
            <button onClick={ addPost }>Send</button>
            <div className='profile__posts'>
                { postMap }
            </div>
        </div>
    );
}

export default Posts;