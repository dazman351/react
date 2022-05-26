import './../../../../App.scss';
import MessageWindow from './MessageWindow/MessageWindow';


const OnlineDialogInfo = (props) => {

    let messagesData = props.messagesData.map( message => <MessageWindow message={message.message} />)


    let onSendMessage = () => {
        props.sendMessage();
    }

    let onChangeNewMessageText = (e) => {
        let newtext = e.target.value;
        props.changeMessage(newtext);
    }


    return (
        <div className='dialog__inner'>
            <div className='dialog__name'>
                <p>Sergey Misevich</p>
            </div>
            <div className='dialog__window'>
                <p>{ messagesData }</p>
            </div>
            <input value={ props.newMessageText } onChange={ onChangeNewMessageText }  className='dialog__input' placeholder='Введите сообщение' />
            <button type='button' onClick={ onSendMessage } className='dialog__button'>Send</button>
        </div>
    );

}


export default OnlineDialogInfo;