import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin, Modal } from 'antd';
import classNames from 'classnames';

import { Message } from 'components';

import './Messages.scss';

const Messages = ({ blockRef, isLoading, items, user, onRemoveMessage, previewImage, setPreviewImage, isTyping, partner }) => {
  return (
    <div ref={blockRef} className={classNames('messages', {'messages--loading': isLoading})}>
      {isLoading && !user ? (
        <Spin tip="Загрузка сообщений..." size="large"></Spin>
      ) : items.length ? (
        items.map(item => 
          (<Message 
            {...item} key={item._id} 
            isMe={user._id === item.user._id}
            onRemoveMessage={onRemoveMessage.bind(this, item._id)}
            setPreviewImage={setPreviewImage}
           />))
      ) : (
        <Empty description="Нет сообщений..." />
      )}
      {isTyping && <Message isTyping={true} user={partner} />}
      <Modal visible={!!previewImage} onCancel={() => setPreviewImage(null)} footer={null}>
        <img src={previewImage} style={{ width: '100%' }} alt="Preview" />
      </Modal>
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
