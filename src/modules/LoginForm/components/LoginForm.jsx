import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from "react-router-dom";

import { Button, Block } from 'components';

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Войдите в аккаунт</h2>
        <p>Пожалуйста, водите в свой аккаунт</p>
      </div>
      <Block>
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
          <Form.Item>
            <Button type="primary" onClick={handleSubmit} size="large">Войти в аккаунт</Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">Зарегестрироваться</Link>
        </Form>
      </Block>
    </div>
  )
};

// class LoginForm extends Component {
//   render() {
//     return (
//       <div>
//         <div className="auth__top">
//           <h2>Войдите в аккаунт</h2>
//           <p>Пожалуйста, водите в свой аккаунт</p>
//         </div>
//         <Block>
//           <Form onSubmit={this.handleSubmit} className="login-form">
//             <Form.Item>
//               <Input
//                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 placeholder="Username"
//                 size="large"
//               />
//             </Form.Item>
//             <Form.Item>
//               <Input
//                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 type="password"
//                 placeholder="Password"
//                 size="large"
//               />
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit" size="large">Войти в аккаунт</Button>
//             </Form.Item>
//             <Link className="auth__register-link" to="/register">Зарегестрироваться</Link>
//           </Form>
//         </Block>
//       </div>
//     )
//   }
// }

export default LoginForm;
