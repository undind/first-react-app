import React from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';

import { ChatInput as ChatInputBase } from 'components';

const ChatInput = ({
  fetchSendMessage, currentDialogId
}) => {
  return <ChatInputBase onSendMessage={fetchSendMessage} currentDialogId={currentDialogId} />
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
