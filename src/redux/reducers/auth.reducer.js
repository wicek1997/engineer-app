const jwt = JSON.parse(localStorage.getItem('access_token'));

let initialState = {};

if(jwt) {
    const jwtPayload = '';

    initialState = {
        isAuthenticated = true,
        user: {
            username: jwtPayload.sub,
            id: jwtPayload.payload.user_id,
            roles: jwtPayload.payload.roles,
        }
    };
} else {
    initialState = {
        isAuthenticated: false,
        user: null,
    }
}


export const authReducer = (state = initialState, {type, payload}) => {
    //cos
}