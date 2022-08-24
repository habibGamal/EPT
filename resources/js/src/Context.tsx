import React, { useState, useEffect } from 'react'
import { api } from './api/axios';

export const ContextApi = React.createContext<[{
    auth: boolean;
    lang: string;
}, React.Dispatch<React.SetStateAction<{
    auth: boolean;
    lang: string;
}>>] | null>(null);

export default function Context({ children }: { children: JSX.Element }) {
    const [appState, setAppState] = useState({
        auth: false,
        lang: 'en',
    })
    useEffect(() => {
        const authCheck = async ()=>{

            const user = await api.get('/user');
            if (user.status === 200) {
                setAppState(state => ({ ...state, auth: true }));
            }
        }
        authCheck();
    }, []);
    return (
        <ContextApi.Provider value={[appState, setAppState]}>
            {children}
        </ContextApi.Provider>
    )
}
