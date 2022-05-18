import './../../App.scss';
import Dialogs from './Dialogs/Dialogs';



const Messages = () => {
    return (
        <div className='profile__messages'>
            <h3>Dialogs</h3>
            <div className='profile__dialogs'>
                <Dialogs name="Sergey" surname="Misevich" message="Когда в Гродно? Ты обещал что бухнем :)" />
                <Dialogs name="Alexandr" surname="Onufrik" message="Привет Антоха. Как работа?)" />
                <Dialogs name="Igor" surname="Jvirblya" message="Соскучился, го бухать Тоха xD" />
                <Dialogs name="Vadim" surname="Kalechits" message="Как там в бассейне?)" />
                <Dialogs name="Yana" surname="Prusevich" message="Удачи работать в школе дальше) Я уволилась)" />
                <Dialogs name="Julia" surname="Yurchenko" message="Приезжай в Гродно, посидим выпьем)" />
                <Dialogs name="Gena" surname="Tolochko" message="Подмени меня в субботу, хорошо?" />
                <Dialogs name="Anjela" surname="Turevich" message="Срочно ко мне в кабинет!!!!!1111!" />
            </div>
        </div>
    );
}


export default Messages;