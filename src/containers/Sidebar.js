import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userApi, dialogsApi } from 'utils/api';

import { Sidebar as SidebarBase } from 'components';

const Sidebar = ({
  user
}) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messageText, setMessagaText] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [selectUserId, setSelectUserId] = useState(false);

  const onClose = () => {
    setVisible(false);
  }

  const onShow = () => {
    setVisible(true);
  }

  const onSearch = (value) => {
    setisLoading(true);
    userApi.findUsers(value).then(({ data }) => {
      setUsers(data);
      setisLoading(false);
    }).catch(() => {
      setisLoading(false);
    })
  }

  const onAddDialog = () => {
    dialogsApi.create({
      partner: selectUserId,
      text: messageText
    }).then(onClose).catch((e) => {
      console.log(e)
      setisLoading(false);
    })
  }

  const handleChangeInput = (value) => {
    setInputValue(value)
  }

  const onChangeTextArea = (e) => {
    setMessagaText(e.target.value)
  }

  const onSelectUser = userId => {
    setSelectUserId(userId);
  }

  return (
    <SidebarBase
      inputValue={inputValue}
      onChangeInput={handleChangeInput}
      onSearch={onSearch}
      user={user} 
      visible={visible} 
      onClose={onClose} 
      onShow={onShow}
      users={users}
      onSelectUser={onSelectUser}
      selectUserId={selectUserId}
      isLoading={isLoading}
      onModalOk={onAddDialog}
      messageText={messageText}
      onChangeTextArea={onChangeTextArea}
    />
  )
};

export default connect(({ user }) => ({user: user.data}))(Sidebar);
