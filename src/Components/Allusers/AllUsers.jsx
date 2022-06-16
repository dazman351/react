import './../../App.scss';
import * as axios from 'axios';
import React from 'react';


class AllUsers extends React.Component {
    
    componentDidMount () {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    
    render () {
        return (
        
        <div className="users__page">
            {
                this.props.usersData.map(u => 
                <div key={u.id}>
                    <div>{u.name}</div>
                    <div>
                        {u.followed 
                        ? <button onClick={ () => {this.props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={ () => {this.props.follow(u.id)}}>Follow</button> 
                        }
                    </div>
                </div>
                )
            }
        </div>
        );
    }
}


// const AllUsers = (props) => {
//     if (props.usersData.length === 0) {

//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items);
//         })
//     }
    
   
//     return (
//         <div className="users__page">
//             {
//                 props.usersData.map(u => 
//                 <div key={u.id}>
//                     <div>{u.name}</div>
//                     <div>
//                         {u.followed 
//                         ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
//                         : <button onClick={ () => {props.follow(u.id)}}>Follow</button> 
//                         }
//                     </div>
//                 </div>
//                 )
//             }
//         </div>
//     );
// }


export default AllUsers;