export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Введите вашу почту';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value
        )
      ) {
        errors.email = 'Указан не верный e-mail';
      }
    },
    password: (value) => {
      if (!value || value.length < 3) {
        errors.password = 'Введите пароль. Не менее трех символов';
      } else if (
        !isAuth && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(
          value
        )
      ) {
        errors.password = 'Слишком легкий пароль';
      }
    },
    password_2: (value) => {
      if ((!isAuth || !value) && value !== values.password) {
        errors.password_2 = 'Пароли не совпадают!';
      }
    },
    fullname: (value) => {
      if (!isAuth && !value) {
        errors.fullname = 'Введите Ваше имя и фамилию';
      }
    },
  }
  
  Object.keys(values).forEach(
    key => rules[key] && rules[key](values[key])
  );
};
