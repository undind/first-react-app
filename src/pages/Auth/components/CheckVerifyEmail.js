import React from 'react';

import { Result } from 'antd';
import { Block } from 'components';

const renderTextInfo = () => {
    return (
      <Block>
        <Result
          status="success"
          title="Регистраци прошла успешно! Ссылка с подтверждением аккаунта отправленна на Ваш E-mail!"
          subTitle="Пожалуйста, пройдите на указанную Вами почту для подтверждения аккаунта!"
        />
      </Block>
    );
}

export default renderTextInfo;
