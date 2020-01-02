import React, { useEffect, useState } from 'react';

import { Result } from 'antd';
import { Block } from 'components';

import { userApi } from 'utils/api';

const renderTextInfo = ({ hash, verified }) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success',
        title: 'Готово!',
        message: 'Аккаунт успешно подтвержден!',
      };
    } else {
      return {
        status: 'error',
        title: 'Ошибка',
        message: 'Вы указали несуществующий или неверный хеш.',
      };
    }
  } else {
    return {
      status: 'info',
      title: 'Подтвердите почту',
      message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
    };
  }
};

const CheckVerifyEmail = ({ location }) => {
  const [verified, setVerified] = useState(false);
  const hash = location.search.split('hash=')[1];
  const info = renderTextInfo({ hash, verified })

  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === 'success') {
          setVerified(true);
        }
      })
    }
  });

  return (
    <Block>
      <Result
        status={info.status}
        title={info.title}
        subTitle={info.message}
      />
    </Block>
  );
}

export default CheckVerifyEmail;
