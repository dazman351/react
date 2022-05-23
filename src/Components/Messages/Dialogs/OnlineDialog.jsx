import './../../../App.scss';
import OnlineDialogInfo from './OnlineDialogInfo/OnlineDialogInfo';



const OnlineDialog = (props) => {
    return (
        <div className='dialog__online'>
           <OnlineDialogInfo newMessageText={props.newMessageText}
                             messagesData={props.messagesData} 
                             dispatch={props.dispatch}/>
        </div>
    );
}


export default OnlineDialog;