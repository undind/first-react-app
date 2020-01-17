import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import { UploadFiles } from "components";

import './ChatInput.scss';

const { TextArea } = Input;

const ChatInput = props => {
  const { 
    handleSendMessage,
    sendMessage,
    value, 
    setValue, 
    emojiPickerVisible,
    toggleEmojiPicker,
    addEmoji,
    attachments,
    onSelectFiles
  } = props;

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (<div className="chat-input__emoji-picker">
          <Picker set='apple' onSelect={(emojiTag) => addEmoji(emojiTag)} />
        </div>)}
        <Button onClick={toggleEmojiPicker} type="link" shape="circle" icon="smile" />
      </div>
      <TextArea
        placeholder="Введите текст сообщения..."
        size="large"
        autoSize={{ minRows: 1.5, maxRows: 2 }}
        onChange={e => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        value={value}
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={onSelectFiles}
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
          <Button onClick={sendMessage} type="link" shape="circle" icon="check-circle" style={{ color: 'green' }} />
        ) : (
          <Button type="link" shape="circle" icon="audio" />
          )}
      </div>
      <div className="chat-input__attachments">
        <UploadFiles attachments={attachments} />
      </div>
    </div>
  )
};

ChatInput.propTypes = {
  className: PropTypes.string
};

export default ChatInput;
