import './../../App.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';



const Profile = (props) => {


    return (
        <div className='profile__info'>
            <ProfileInfo />
            <PostsContainer store={props.store} />
        </div>
    );
}


export default Profile;