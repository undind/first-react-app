import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';

import { messagesActions } from 'redux/actions';
import socket from 'core/socket';
import { Empty } from 'antd';

import { Messages as BaseMessages } from 'components';

const Dialogs = ({ currentDialog, addMessage, fetchMessages, items, user, isLoading, removeMessageById, attachments }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  let typingTimeoutId = null;
  
  const messagesRef = useRef(null);
  
  const onNewMessage = (data) => {
    addMessage(data);
  }

  const toggleIsTyping = () => {
    setIsTyping(true);
    clearInterval(typingTimeoutId);
    typingTimeoutId = setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  useEffect(() => {
    socket.on('DIALOGS:TYPING', toggleIsTyping);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentDialog) {
      fetchMessages(currentDialog._id);
    }

    socket.on("SERVER:NEW_MESSAGE", onNewMessage)

    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDialog, fetchMessages]);

  useEffect(() => {
    if (currentDialog) {
      console.log(messagesRef.current.scrollHeight)
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, isTyping]);

  if (!currentDialog) {
    return <Empty description="Откройте или продолжите диалог" />;
  }

  
  return (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading}
      onRemoveMessage={removeMessageById}
      setPreviewImage={setPreviewImage}
      previewImage={previewImage}
      isTyping={isTyping}
      partner={
        user._id !== currentDialog.partner._id ? currentDialog.author : currentDialog.partner
      }
    />
  );
};

export default connect(({ dialogs, messages, user, attachments }) => (
  { 
    currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }), 
    items: messages.items,
    isLoading: messages.isLoading,
    attachments: attachments.items,
    user: user.data
  }
), messagesActions)(Dialogs);
