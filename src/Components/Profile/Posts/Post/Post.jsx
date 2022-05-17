import './../../../../App.scss';


const Post = (props) => {
    return(
        <div className='post'>
            <ul>
                <p>{props.text}</p>
                <div className='profile__likes'>
                    {props.likes} likes
                </div>
            </ul>
        </div>
    );
}

export default Post;


