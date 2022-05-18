import './../../App.scss';
import Dialogs from './Dialogs/Dialogs';



const Messages = () => {
    return (
        <div className='profile__messages'>
            <h3>Dialogs</h3>
            <div className='profile__dialogs'>
                <Dialogs id="1" name="Sergey" surname="Misevich" message="Когда в Гродно? Ты обещал что бухнем :)" />
                <Dialogs id="2" name="Alexandr" surname="Onufrik" message="Привет Антоха. Как работа?)" />
                <Dialogs id="3" name="Igor" surname="Jvirblya" message="Соскучился, го бухать Тоха xD" />
                <Dialogs id="4" name="Vadim" surname="Kalechits" message="Как там в бассейне?)" />
                <Dialogs id="5" name="Yana" surname="Prusevich" message="Удачи работать в школе дальше) Я уволилась)" />
                <Dialogs id="6" name="Julia" surname="Yurchenko" message="Приезжай в Гродно, посидим выпьем)" />
                <Dialogs id="7" name="Gena" surname="Tolochko" message="Подмени меня в субботу, хорошо?" />
                <Dialogs id="8" name="Anjela" surname="Turevich" message="Срочно ко мне в кабинет!!!!!1111!" />
            </div>
        </div>
    );
}


export default Messages;