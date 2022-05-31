let initialState = {
    usersData: [
        
    ]
}



const allUsersReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FOLLOW': 
           return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW': 
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case 'SET_USERS':
            return {
                ...state,
                usersData: [...state.usersData, ...action.usersData]
            }
        default:
            return state;
    }
}


export const followAC = (userId) => {
    return {
        type: 'FOLLOW', userId: userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: 'UNFOLLOW', userId: userId
    }
}

export const setUsersAC = (usersData) => {
    return {
        type: 'SET_USERS', usersData: usersData
    }
}

export default allUsersReducer;