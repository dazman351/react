import './../../../App.scss';


const Dialogs = (props) => {
    return (
        <div className='dialog'>
            <p className='user'>{props.name} {props.surname}</p>
            <p>{props.message}</p>
        </div>
    );
}


export default Dialogs;