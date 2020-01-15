import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { dialogsActions } from 'redux/actions';
import { Dialogs as BaseDialogs } from 'components';

import socket from 'core/socket';

const Dialogs = ({ fetchDialogs, currentDialogId, items, userId }) => {
  const [inputValue, setValue] = useState('');
  const [filtered, setFiltredItems] = useState(Array.from(items));

  const onChangeInput = (value = '') => {
    setFiltredItems(items.filter(dialog =>
      dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 || dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
    ));
    setValue(value);
  };

  useEffect(() => {
    if (items.length) {
      onChangeInput();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items,]);

  useEffect(() => {
    fetchDialogs();
    // if (!items.length) {
    //   fetchDialogs();
    // } else {
    //   setFiltredItems(items);
    // }

    socket.on("SERVER:DIALOG_CREATED", fetchDialogs);
    socket.on('SERVER:NEW_MESSAGE', fetchDialogs);

    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", fetchDialogs);
      socket.removeListener('SERVER:NEW_MESSAGE', fetchDialogs);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseDialogs 
      userId={userId} 
      items={filtered} 
      onSearch={onChangeInput}
      inputValue={inputValue}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
