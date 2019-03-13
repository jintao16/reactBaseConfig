import React from 'react'
import { connect } from 'react-redux'
import { goLogin } from '../../redux/actions/login'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import './login.css'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmit(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row className="login-form">
                    <Col span={10} offset={6}>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Item>
                                {getFieldDecorator('userAccount', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('userPassword', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    let { login } = state
    return {
        loginInfo: login.loginInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (params) => {
            dispatch(goLogin(params));
        }
    }
};
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);

export default LoginContainer 