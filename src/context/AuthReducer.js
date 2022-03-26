const AuthReducer = (state, action) => {
    //LOGIN_START or LOGIN_SUCCESS or LOGIN_FAILURE, we're loading the payload from AuthActions.js
    switch(action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true
            }
        default:
            return state;
    }
}

export default AuthReducer