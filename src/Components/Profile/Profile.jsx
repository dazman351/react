import './../../App.scss';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {


    return (
        <div className='profile__info'>
            <ProfileInfo />
            <Posts  postData={props.postData}
                    dispatch={props.dispatch}
                    newPostData={props.newPostData} />
        </div>
    );
}


export default Profile;