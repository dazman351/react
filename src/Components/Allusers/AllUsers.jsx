import './../../App.scss';


const AllUsers = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {id: 1, name: "Sergey", surname: "Misevich", followed: true},
            {id: 2, name: "Alexandr", surname: "Onufrik", followed: false},
            {id: 3, name: "Igor", surname: "Jvirblya", followed: true},
            {id: 4, name: "Vadim", surname: "Kalechits", followed: true},
            {id: 5, name: "Yana", surname: "Prusevich", followed: false},
            {id: 6, name: "Julia", surname: "Yurchenko", followed: true},
            {id: 7, name: "Gena", surname: "Tolochko", followed: false},
            {id: 8, name: "Anjela", surname:"Turevich", followed: false}
        ])
    }
    
   
    return (
        <div className="users__page">
            {
                props.usersData.map(u => 
                <div key={u.id}>
                    <div>{u.name}</div>
                    <div>{u.surname}</div>
                    <div>
                        {u.followed 
                        ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={ () => {props.follow(u.id)}}>Follow</button> 
                        }
                    </div>
                </div>
                )
            }
        </div>
    );
}


export default AllUsers;