import './../../../App.scss';


const Friend = (props) => {
    return (
        <div className='friend__item'>
            <img src='https://st4.depositphotos.com/3864435/27060/i/1600/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg' alt='avatar'></img>
            <p>{props.name} {props.surname}</p>
        </div>
    );
}

export default Friend;