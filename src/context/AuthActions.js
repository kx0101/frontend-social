// Login initiative
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
})

// Successfully log in
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

// Failed log in
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
})

// Payload is basically what we cant the website to fetch after each state.