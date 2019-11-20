import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from "react-router-dom";

import { Button, Block } from 'components';

class RegisterForm extends Component {
  render() {
    const success = false;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, Вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {!success ? (
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="E-mail"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Ваше имя"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Пароль"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Повторите пароль"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">Зарегестрироваться</Button>
              </Form.Item>
              <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <Icon type="info-circle" theme="twoTone" />
              </div>
              <h2>Подтвердите свой аккаунт</h2>
              <p>
                На Вашу почту отправлено письмо с ссылкой на подтверждение
                аккаунта.
              </p>
            </div>
            )}
        </Block>
      </div>
    )
  }
}

export default RegisterForm;
