import './../../../App.scss';


const ProfileInfo = () => {
    return (
        <div className="profile__info__inner">
            <img src="https://st4.depositphotos.com/3864435/27060/i/1600/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg" alt='avatar'></img>
            <div className='profile__text'>
                <p>Богдан Артасович</p>
                <p>Дата рождения: 12.04.1999</p>
                <p>Город: Винница</p>
            </div>
        </div>   
    );
}

export default ProfileInfo;


