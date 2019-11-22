import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from "react-router-dom";

import { Button, Block } from 'components';
const success = false;

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, Вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item 
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'} 
              hasFeedback
              help={!touched.email ? '' : errors.email}
            >
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="E-mail"
                size="large"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
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
            <Form.Item
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'} 
              hasFeedback
              help={!touched.password ? '' : errors.password}
            >
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                id="password"
                type="password"
                placeholder="Пароль"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={!touched.password_2 ? '' : errors.password_2 ? 'error' : 'success'} 
              hasFeedback
              help={!touched.password_2 ? '' : errors.password_2}
            >
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                id="password_2"
                placeholder="Повторите пароль"
                size="large"
                value={values.password_2}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button type="primary" onClick={handleSubmit} size="large">Зарегистрироваться</Button>
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
};

export default RegisterForm;
