import './../../../App.scss';
import OnlineDialogInfoContainer from './OnlineDialogInfo/OnlineDialogInfoContainer';



const OnlineDialog = (props) => {
    return (
        <div className='dialog__online'>
           <OnlineDialogInfoContainer store={props.store}/>
        </div>
    );
}


export default OnlineDialog;