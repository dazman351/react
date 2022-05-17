import './../../../App.scss';
import Post from './Post/Post';


const Posts = () => {
    return (
        <div className='profile__posts'>
            <Post text="Wassup guys :)" likes="2"/>
            <Post text="Hey buddy :)" likes="4"/>
            <Post text="How are you?" likes="10"/>
            <Post text="I'm normal, and you?" likes="22"/>
            <Post text="Awesome :)" likes="3"/>
        </div>
    );
}

export default Posts;