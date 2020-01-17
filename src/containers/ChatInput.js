import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import { filesApi } from 'utils/api';

import { ChatInput as ChatInputBase } from 'components';

const ChatInput = ({
  fetchSendMessage, currentDialogId
}) => {
  const [value, setValue] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [emojiPickerVisible, setShowEmojiPicker] = useState('');

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setShowEmojiPicker(false)
    }
  }

  const sendMessage = () => {
    fetchSendMessage(value, currentDialogId, attachments.map(file => file.uid));
    setValue('');
    setAttachments([]);
  }

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  }

  const addEmoji = ({ colons }) => {
    setValue((value + ' ' + colons).trim())
  }

  const onSelectFiles = async files => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);
      uploaded = [
        ...uploaded,
        {
          uid,
          name: file.name,
          status: 'uploading',
        },
      ];
      setAttachments(uploaded);
      // eslint-disable-next-line no-loop-func
      await filesApi.upload(file).then(({ data }) => {
        uploaded = uploaded.map(item => {
          if (item.uid === uid) {
            return {
              status: 'done',
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url,
            };
          }
          return item;
        });
      });
    }

    setAttachments(uploaded);
  };

  useEffect(() => {
    const el = document.querySelector('.chat-input__smile-btn');
    document.addEventListener('click', handleOutsideClick.bind(this, el))
    return () => {
      document.removeEventListener('click', handleOutsideClick.bind(this, el))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!currentDialogId) {
    return null;
  }

  return (
    <ChatInputBase 
      value={value}
      setValue={setValue}
      addEmoji={addEmoji}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      handleSendMessage={handleSendMessage}
      sendMessage={sendMessage}
      attachments={attachments}
      onSelectFiles={onSelectFiles}
    />
  )
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
