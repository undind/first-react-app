import React from 'react';
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "modules";
import CheckVerifyEmail from './components/CheckVerifyEmail';

import './Auth.scss';

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path="/signin" component={LoginForm} />
      <Route exact path="/signup" component={RegisterForm} />
      <Route exact path="/signup/verify" component={CheckVerifyEmail} />
    </div>
  </section>
);

export default Auth;
