import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const ChatInput = props => {
  const [value, setValue] = useState('');
  const [emojiPickerVisible, setShowEmojiPicker] = useState('');
  const { onSendMessage, currentDialogId } = props;

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      onSendMessage(value, currentDialogId);
      setValue('');
    }
  }

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (<div className="chat-input__emoji-picker">
          <Picker set='apple' />
        </div>)}
        <Button onClick={toggleEmojiPicker} type="link" shape="circle" icon="smile" />
      </div>
      <Input
        placeholder="Введите текст сообщения..."
        size="large"
        onChange={e => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        value={value}
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
