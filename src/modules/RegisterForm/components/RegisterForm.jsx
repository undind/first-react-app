import React from 'react';
import { Form, Icon } from 'antd';
import { Link } from "react-router-dom";

import { Button, Block, FormField } from 'components';
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
            <FormField
              name="email"
              icon="mail"
              placeholder="E-mail"
              size="large"
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormField
              name="fullname"
              icon="user"
              placeholder="Ваше имя"
              size="large"
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormField
              name="password"
              icon="lock"
              placeholder="Пароль"
              size="large"
              type="password"
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormField
              name="password_2"
              icon="lock"
              placeholder="Повторите пароль"
              size="large"
              type="password"
              touched={touched}
              values={values}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
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
