import React, {useState, useContext} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Particles from 'react-particles-js';

import './AuthPage.css';

const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordRepeat: '',
        name: ''
    })

    const { login } = useContext(AuthContext)
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const registerHandler = async () => {
        try{
            if (form.password !== form.passwordRepeat){
                alert('Пароли не совпадают!');
                return
            }
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
         catch(err){
            console.log(err)
        }
    }

    const loginHandler = async () => {
        try{
            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                login(response.data.token, response.data.userId)
            });
        } catch(err) {
            console.log(err)
        }
    }

    return (
      <BrowserRouter>
        <Switch>
        <React.Fragment>
            <div className="main">
            <Particles
                canvasClassName="example"
            />
            <div className="container">
                <div className="auth-page">
                    <Route path="/login">
                    <h3>Авторизация</h3>
                    <form 
                        className="form form-login"
                        onSubmit={(e) => e.preventDefault()}
                        >
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="auth-email"
                                    className="validate"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="auth-email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="auth-password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="auth-password"
                                    className="validate"
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <button 
                            className="wawes-effect wawes-light btn btn-blue"
                            onClick={loginHandler}
                            >Войти</button>
                            <Link to="/registration" className="bth-outline btn-reg">Ещё нет аккаунта?</Link>
                        </div>
                    </form>
                    </Route>
                    <Route path="/registration">
                    <h3>Регистрация</h3>
                    <form 
                    className="form form-login"
                    onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="registr-email"
                                    className="validate"
                                    onChange={changeHandler}
                                    />
                                <label htmlFor="registr-email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input 
                                    type="text"
                                    name="name" 
                                    id="registr-name"
                                    className="validate"
                                    onChange={changeHandler}
                                    />
                                <label htmlFor="registr-name">Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="registr-password"
                                    className="validate"
                                onChange={changeHandler}
                                />
                                <label htmlFor="registr-password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input 
                                    type="password" 
                                    name="passwordRepeat" 
                                    id="registr-password-repeat"
                                    className="validate"
                                    onChange={changeHandler}
                                    />
                                <label htmlFor="registr-password-repeat">Repeat password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="wawes-effect wawes-light btn btn-blue" 
                                onClick={registerHandler}    
                            >Регистрация</button>
                            <Link to="/login" className="bth-outline btn-reg">Уже есть аккаунт?</Link>
                        </div>
                    </form>
                    </Route>
                </div>
            </div>
            </div>
        </React.Fragment>
        </Switch>
      </BrowserRouter>  
    );
}

export default AuthPage;
