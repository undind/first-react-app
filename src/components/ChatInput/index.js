import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { UploadField } from '@navjobs/upload';

import './ChatInput.scss';

const ChatInput = props => {
  const [value, setValue] = useState('');

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button type="link" shape="circle" icon="smile" />
      </div>
      <Input
        placeholder="Введите текст сообщения..."
        size="large"
        onChange={e => setValue(e.target.value)}
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={files => console.log(files)}
          containerProps={{
            className: 'photos'
          }}
          uploadProps={{
            accept: '.jpg,.png,.jpeg,.gif,.bmp',
            multiple: true
          }}
        >
          <Button type="link" shape="circle" icon="camera" />
        </UploadField>
        {value ? (
          <Button type="link" shape="circle" icon="check-circle" style={{ color: 'green' }} />
        ) : (
          <Button type="link" shape="circle" icon="audio" />
          )}
      </div>
    </div>
  )
};

ChatInput.propTypes = {
  className: PropTypes.string
};

export default ChatInput;
