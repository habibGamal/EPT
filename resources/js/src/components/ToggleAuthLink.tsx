import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { api, web } from '../api/axios';
import { ContextApi } from '../Context';

export default function ToggleAuthLink() {
    const [appState, setAppState] = useContext(ContextApi)!;
    const navigate = useNavigate();
    const logout = async () => {
        await web.get('/sanctum/csrf-cookie')
        const logout = await api.post('/logout');
        if (logout.status === 200) {
            setAppState(state => ({ ...state, auth: false }));
            navigate('/', { replace: true });
        }
    }
    return (
        <>
            {appState.auth ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={logout}>Logout</button></li>
                </>
                :
                <li><Link to="/login">Login</Link></li>
            }
        </>
    )
}
