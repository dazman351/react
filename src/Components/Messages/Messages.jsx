import './../../App.scss';
import Dialog from './Dialogs/Dialog';






const Messages = (props) => {

    let dialogsMap = props.dialogsData.map(

    dialog => <Dialog id={dialog.id} key={dialog.id} name={dialog.name} surname={dialog.surname} />
    
    );

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