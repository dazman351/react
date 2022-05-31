import { connect } from "react-redux";
import AllUsers from "./AllUsers";
import { followAC, setUsersAC, unfollowAC } from './../../redux/allusersReducer';



let MapStateToProps = (state) => {
    return {
        usersData: state.allusersPage.usersData
    }
}


let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData));
        }
    }
}


const AllUsersContainer = connect(MapStateToProps, MapDispatchToProps) (AllUsers);


export default AllUsersContainer;