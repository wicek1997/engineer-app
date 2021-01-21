localStorage.setItem('access_token');

const jwt = JSON.parse(localStorage.getItem('access_token'));

let initialState = {};

if(jwt) {
    const jwtPayload = '';

    jwtPayload = parseJwt(jwtPayload);

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


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


export const authReducer = (state = initialState, {type, payload}) => {
    //cos
}



