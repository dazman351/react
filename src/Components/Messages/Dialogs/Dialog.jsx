import './../../../App.scss';
import { Link } from 'react-router-dom';


const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className='dialog'>
            <Link to={path} className="link">
                <p className='user'>{props.name} {props.surname}</p>
                <p className='message'>{props.message}</p>
            </Link>
        </div> 
    );
}


export default Dialog;