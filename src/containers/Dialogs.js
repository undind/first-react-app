import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { dialogsActions } from 'redux/actions';
import { Dialogs as BaseDialogs } from 'components';
import socket from 'core/socket';

const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {
  const [inputValue, setValue] = useState('');
  const [filtered, setFiltredItems] = useState(Array.from(items));

  const onChangeInput = value => {
    setFiltredItems(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0));
    setValue(value);
  };

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltredItems(items);
    }

    socket.on("SERVER:DIALOG_CREATED", (data) => {
      fetchDialogs();
    })
  }, [items, fetchDialogs]);

  return (
    <BaseDialogs 
      userId={userId} 
      items={filtered} 
      onSearch={onChangeInput} 
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
