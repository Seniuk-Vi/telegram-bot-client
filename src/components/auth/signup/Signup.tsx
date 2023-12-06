import React from 'react';
import {Button, Form, Input, message} from 'antd';
import './css/Signup.css';
import { useAuth } from '../../../utils/IAuthContext'; // Adjust the path to your AuthContext
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const { register } = useAuth();

    const onFinish = async (values: any) => {
        const {email, password, confirmPassword } = values;
        try {
            await register(email, password, confirmPassword);
            console.log('Success:', values);
            // Navigate to the logged-in area of your application here
            navigate('/auth');
        } catch (error) {
            console.error('Failed:', error);
            // Display the error message
            message.error('Sign-up failed.');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Form
            name={"Signup"}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label={"Email"}
                name={"email"}
                rules={[{required: true, message: "Please input your email"}]}>
                <Input/>
            </Form.Item>
            <Form.Item
                label={"Password"}
                name={"password"}
                rules={[{required: true, message: "Please input your password"}]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item
                label={"Confirm password"}
                name={"confirmPassword"}
                rules={[{required: true, message: "Please repeat your password"}]}>
                <Input.Password/>
            </Form.Item>

            <Button
                type={"primary"}
                htmlType={"submit"}
            >
                Signup
            </Button>
        </Form>

    );

}

export default Signup;