import { withFormik } from 'formik';

import LoginForm from '../components/LoginForm';

import validateForm from 'utils/validate';
import { userActions } from 'redux/actions';

import store from 'redux/store'

const LoginFormContainer = withFormik({
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
    store.dispatch(userActions.fetchUserLogin(values)).then(() => {
      setSubmitting(false);
    });
  },

  displayName: 'RegisterForm',
})(LoginForm);

export default LoginFormContainer;
