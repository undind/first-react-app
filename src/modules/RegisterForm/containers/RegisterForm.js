import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Введите вашу почту';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'Указан не верный e-mail';
    }

    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(
        values.password
      )
    ) {
      errors.password = 'Слишком легкий пароль';
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);
