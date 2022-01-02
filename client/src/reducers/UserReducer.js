const init_state = {
    userLoggedIn: false,
    user_id: null
};

const userReducer = (state = init_state, action) => {
    if (action.type === 'LOGIN_USER') {
        return {
            ...state,
            userLoggedIn: true,
            user_id: action.payload
        }
    }

    if (action.type === 'LOGOUT_USER') {
        return {
            userLoggedIn: false,
            user_id: null
        }
    }
    return state; // returning same state for unspecified action
}


export default userReducer;