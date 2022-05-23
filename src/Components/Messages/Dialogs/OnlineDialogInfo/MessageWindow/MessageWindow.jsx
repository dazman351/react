import "../../../../../App.scss";


const MessageWindow = (props) => {
    return (
        <div className='dialog__window'>
            <p>{props.message}</p>
        </div>
    );
}

export default MessageWindow;