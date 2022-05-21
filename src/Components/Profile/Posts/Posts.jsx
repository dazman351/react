import './../../../App.scss';
import Post from './Post/Post';


const Posts = (props) => {

    let postMap = props.postData.map(post => <Post text={post.text} likes={post.likes}/>)

    return (
        <div className='profile__input'>
            Напишите ваше первое сообщение: <input type="text" />
            <button type="button">Send</button>
            <div className='profile__posts'>
                { postMap }
            </div>
        </div>
    );
}

export default Posts;