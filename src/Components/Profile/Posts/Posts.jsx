import './../../../App.scss';
import Post from './Post/Post';
import postData from './../postData';


let postMap = postData.map(post => <Post text={post.text} likes={post.likes}/>)


const Posts = () => {
    return (
        <div className='profile__posts'>
            { postMap }
        </div>
    );
}

export default Posts;