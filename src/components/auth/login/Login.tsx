import React from 'react';
import {Button, Form, Input} from 'antd';
import { message } from 'antd';
import './css/Login.css';
import { useAuth } from '../../../utils/IAuthContext'; // Adjust the path to your AuthContext
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
const Login = () => {
    const navigate = useNavigate();
    const { authenticate } = useAuth();

    const onFinish = async (values: any) => {
        const { email, password } = values;
        try {
            await authenticate(email, password);
            console.log('Success:', values);
            // Navigate to the logged-in area of your application here
            navigate('/');
        } catch (error) {
            console.error('Failed:', error);
            // Display the error message
            message.error('Authentication failed. Please check your email and password.');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Form className={"login-form"}
            name={"login"}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item className={"login-form-item"}
                label={"Email"}
                name={"email"}
                rules={[{required: true, message: "Please input your email"}]}>
                <Input className={"login-form-item-input"}/>
            </Form.Item>
            <Form.Item className={"login-form-item"}
                label={"Password"}
                name={"password"}
                rules={[{required: true, message: "Please input your password"}]}>
                <Input.Password className={"login-form-item-input"}/>
            </Form.Item>
            <Button className={"login-form-button"}
                type={"primary"}
                htmlType={"submit"}
            >
                Login
            </Button>
        </Form>
    );

}

export default Login;