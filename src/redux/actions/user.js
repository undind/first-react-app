import { userApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

const Actions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data
  }),
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data));
    })
  },
  fetchUserLogin: (postData) => dispatch => {
    return userApi.signIn(postData).then(({ data }) => {
      const { token } = data;

      openNotification({
        title: 'Отлично!',
        text: 'Авторизация успешна',
        type: 'success',
      });

      window.axios.defaults.headers.common["token"] = token;
      window.localStorage['token'] = token;
      dispatch(Actions.fetchUserData())

      return data;
      
    }).catch(({ response }) => {
      if (response.status === 403) {
        openNotification({
          title: 'Ошибка!',
          text: 'Неверный логин или пароль!',
          type: 'error',
        });
      }
      
    })
  },
  fetchUserRegister: (postData) => dispatch => {
    return userApi.signUp(postData).then(({ data }) => {
      console.log(data);
      return data;
    })
  }
};

export default Actions;
