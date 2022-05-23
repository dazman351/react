import './../../../App.scss';
import Post from './Post/Post';
import { updateTextActionCreator } from '../../../redux/state';
import { addPostActionCreator } from './../../../redux/state';




const Posts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let newtext = e.target.value;
        let action = updateTextActionCreator(newtext);
        props.dispatch(action);
        
    }

    let postMap = props.postData.map(post => <Post text={post.text} likes={post.likes}/>)

    return (
        <div className='profile__input'>
            Напишите ваше первое сообщение: <input
                                    placeholder='Введите текст'
                                    onChange={onPostChange} 
                                    value={ props.newPostData } />
            <button onClick={ addPost }>Send</button>
            <div className='profile__posts'>
                { postMap }
            </div><br />
        </div>
    );
}

export default Posts;