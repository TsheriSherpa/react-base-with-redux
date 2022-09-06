import '../../styles/login.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useStore } from 'react-redux';
import { login } from "/src/redux/reducers/userReducer";
import { authService } from "../../services/auth-service";
import { error as failure, clear } from "/src/redux/reducers/alertReducer"

function Login() {
    const store = useStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate()
    const error = useSelector((state) => state.alert.error)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);

        authService.loginUser(email, password)
            .then(
                user => { 
                    store.dispatch(login(user));
                    store.dispatch(clear());
                    navigate('/');
                },
                error => {
                    store.dispatch(failure(error.toString()));
                }
        );
        setSubmitting(false);
    }

    useEffect(() => {
        if (store.getState().user.loggedIn) {
            navigate('/');
        }   
    })

    const show = () => {
        var x = document.getElementById("pass");
        var img = document.getElementById("showimg");

        var show = "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/show-512.png";
        var hide = "https:/ /cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";

        x.type = x.type == "password" ? "text" : "password";
        img.src = x.type == "text" ? show : hide;
        
    }
    
    return (
        <> 
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>SIGN IN </h2>
                        {error && 
                        <span style={{ color:"red" }}>{error}</span>}
                        <input
                            type="text"
                            required
                            placeholder="Username"
                            id="user"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            id="pass"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                            onClick={show}
                            id="showimg"
                        />
                        <span id="vaild-pass"></span>
                        <button
                            type="submit"
                            variant="primary"
                            disabled={submitting}
                        >
                            {submitting ? 'Loading…' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login