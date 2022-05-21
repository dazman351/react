import './../../App.scss';
import Dialog from './Dialogs/Dialog';
import dialogsData from './dialogsData';

let dialogsMap = dialogsData.map(
    dialog => <Dialog id={dialog.id} name={dialog.name} surname={dialog.surname} message={dialog.message} />
    
    );



const Messages = () => {
    return (
        <div className='profile__messages'>
            <h3>Dialogs</h3>
            <div className='profile__dialogs'>
                { dialogsMap }
            </div>
        </div>
    );
}


export default Messages;