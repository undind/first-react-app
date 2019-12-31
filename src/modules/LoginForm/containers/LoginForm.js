import { withFormik } from 'formik';
import LoginForm from '../components/LoginForm';
import validateForm from 'utils/validate';

import { openNotification } from 'utils/helpers';

import axios from 'core/axios';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validate: values => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    return axios.post('/user/login', values).then(({ data }) => {
      const { status, token } = data;

      if (status === 'error') {
        openNotification({
          text: "Неверный логин или пароль",
          type: "error",
          title: "Ошибка при авторизации"
        })
      }

      setSubmitting(false);
    }).catch(() => {
      setSubmitting(false);
    })
  },

  displayName: 'RegisterForm',
})(LoginForm);
