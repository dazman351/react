import './../../App.scss';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {


    return (
        <div className='profile__info'>
            <ProfileInfo />
            <Posts  postData={props.postData}
                    addPost={props.addPost}
                    newPostData={props.newPostData}
                    updatePost={props.updatePost} />
        </div>
    );
}


export default Profile;