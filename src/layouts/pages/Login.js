import '../../styles/login.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useStore } from 'react-redux';
import { login } from "/src/redux/reducers/userReducer";
import { authService } from "../../services/auth-service";
import { error as failure, clear } from "/src/redux/reducers/alertReducer"
import { Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';


function Login() {
    const store = useStore();
    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm();
    const error = useSelector((state) => state.alert.error)
    const { isSubmitting, errors } = formState;
    

    const submitFormHandler = (data) => {
        return new Promise((resolve) => {
            authService.loginUser(data.email, data.password)
                .then(
                    user => {
                        store.dispatch(login(user));
                        store.dispatch(clear());
                        navigate('/');
                    },
                    error => {
                        store.dispatch(failure(error.toString()));
                        setTimeout(() => store.dispatch(clear()), 5000)
                        resolve();
                    }
            );
        })
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
                    <form className="login-form" onSubmit={handleSubmit(submitFormHandler)}>
                        <h2>SIGN IN </h2>
                        {error && 
                            <span style={{ color:"red" }}>{error}</span>}
                        {errors.Email &&
                            <span style={{ color: "red" }}>{errors.Email.message}</span>}
                        
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            required
                            {
                                ...register("email",
                                {
                                    required: true,
                                    pattern: { value: /^\S+@\S+$/i, message: "Enter valid email" },
                                    })} />
                        <input
                            id="pass"
                            type="password"
                            placeholder="password"
                            name="password"
                            required
                            {
                                ...register("password", {})
                            } />
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                            onClick={show}
                            id="showimg"
                        />
                        <span id="vaild-pass"></span>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting &&  (<span className="spinner-border spinner-border-sm mr-1"></span>)} Login
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login