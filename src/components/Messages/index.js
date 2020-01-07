import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from 'components';

import './Messages.scss';

const Messages = ({ blockRef, isLoading, items, user, onRemoveMessage }) => {
  return (
    <div ref={blockRef} className={classNames('messages', {'messages--loading': isLoading})}>
      {isLoading ? (
        <Spin tip="Загрузка сообщений..." size="large"></Spin>
      ) : items.length ? (
        items.map(item => <Message {...item} key={item._id} isMe={user._id === item.user._id} onRemoveMessage={onRemoveMessage.bind(this, item._id)} />)
      ) : (
        <Empty description="Нет сообщений..." />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
