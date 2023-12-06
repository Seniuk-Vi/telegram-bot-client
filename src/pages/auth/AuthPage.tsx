import React, { useState } from 'react';
import Login from '../../components/auth/login/Login';
import Signup from '../../components/auth/signup/Signup';
import { Button } from 'antd';
import './css/AuthPage.css';
enum FormPage {
    Login,
    Signup,
}

const AuthPage = () => {
    const [activeForm, setActiveForm] = useState<FormPage>(FormPage.Login);

    return (
        <div className={"auth-main"}>
            {activeForm === FormPage.Login && <Login />}
            {activeForm === FormPage.Signup && <Signup />}
            <Button
                onClick={() =>
                    setActiveForm(
                        activeForm === FormPage.Login ? FormPage.Signup : FormPage.Login
                    )
                }
            >
                {activeForm === FormPage.Login ? 'Not Registered' : 'Back to Login'}
            </Button>
        </div>
    );
};

export default AuthPage;