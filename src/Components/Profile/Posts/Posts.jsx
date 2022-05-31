import './../../../App.scss';
import Post from './Post/Post';



const Posts = (props) => {

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let newtext = e.target.value;
        props.updateText(newtext);
        
    }

    let postMap = props.postData.map(post => <Post text={post.text} key={post.id} likes={post.likes}/>)

    return (
        <div className='profile__input'>
            Напишите ваше первое сообщение: <input
                                    placeholder='Введите текст'
                                    onChange={ onPostChange } 
                                    value={ props.newPostData } />
            <button onClick={ addPost }>Send</button>
            <div className='profile__posts'>
                { postMap }
            </div>
        </div>
    );
}

export default Posts;