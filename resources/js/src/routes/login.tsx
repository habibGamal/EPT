import React , {useRef,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { api, web } from '../api/axios';
import { ContextApi } from '../Context';

export default function Login() {
    const form = useRef(null);
    const navigate = useNavigate();
    const [appState, setAppState] = useContext(ContextApi)!;
    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(form.current!);
        await web.get('/sanctum/csrf-cookie')
        const login = await api.post('/login', {
            'email': formData.get('email'),
            'password': formData.get('password')
        });
        if (login.status === 200) {
            setAppState(state => ({ ...state, auth: true }));
            navigate('/dashboard',{replace:true});
        }
    }
    return (
        <div className="container">
            <form ref={form} onSubmit={login} method='post' className="rounded bg-stone-100 shadow-sm p-4 w-[400px] mx-auto my-16" >
                <table className="table-inputs mx-auto">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="email">Email</label>
                            </td>
                            <td>
                                <input required className="input" type="text" name="email" id="email" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password">Password</label>
                            </td>
                            <td>
                                <input required className="input" type="password" name="password" id="password" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="rounded bg-second text-white shadow font-sans p-2 mx-auto block">Login</button>
            </form>
        </div>
    )
}
