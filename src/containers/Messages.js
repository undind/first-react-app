import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import socket from 'core/socket';
import { Empty } from 'antd';

import { Messages as BaseMessages } from 'components';

const Dialogs = ({ currentDialogId, addMessage, fetchMessages, items, user, isLoading, removeMessageById }) => {
  const messagesRef = useRef(null);
  
  const onNewMessage = (data) => {
    addMessage(data);
  }

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }

    socket.on("SERVER:NEW_MESSAGE", onNewMessage)

    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDialogId, fetchMessages]);

  useEffect(() => {
    if (currentDialogId) {
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  if (!currentDialogId) {
    return <Empty description="Откройте или продолжите диалог" />;
  }

  
  return (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading}
      onRemoveMessage={removeMessageById}
    />
  );
};

export default connect(({ dialogs, messages, user }) => (
  { currentDialogId: dialogs.currentDialogId, 
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data
  }
), messagesActions)(Dialogs);
