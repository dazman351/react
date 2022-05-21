import './../../App.scss';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friendsMap = props.friendsData.map(friend => <Friend name={friend.name} surname={friend.surname} />);

    return (
        <div className='friends'>
            <div className='friends__inner'>
                <h2>Friends</h2>
                <div className='my__friends'>
                    { friendsMap }
                </div>
            </div>
        </div>
    );
}


export default Friends;