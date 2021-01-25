import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../redux';


export const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(authActions.logoutSuccess({})); 
<<<<<<< HEAD
        history.push('login');
    },
    []);
    console.log("Wylogowano.");
=======
        history.push('/');

        console.log("Wylogowano.");
    },
    []);
    
>>>>>>> 4634ad8be3f039e98aca8c9a8769d8a83d29254e
    
    return(
        <div className="container">
            <h1>About Page</h1>
        </div>
<<<<<<< HEAD
)
=======
    )
>>>>>>> 4634ad8be3f039e98aca8c9a8769d8a83d29254e
}
