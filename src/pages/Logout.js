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

        history.push('/');
    },
    []);
    console.log("Wylogowano.");

    


    return(
        <div className="container">
            <h1>About Page</h1>
        </div>
    )
}
