import React from 'react';
import { Icon, Button, Modal, Select, Input, Form } from 'antd';

import { Dialogs } from 'containers';

import './Sidebar.scss';

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({ user, visible, onShow, onClose, users, onChangeInput, onSearch, inputValue, onSelectUser, selectUserId, isLoading, onModalOk, messageText, onChangeTextArea }) => {
  const options = users.map(user => <Option key={user._id}>{user.fullname}</Option>);

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <Icon type="team" />
          <span>Список диалогов</span>
        </div>
        <Button onClick={onShow} type="link" shape="circle" icon="form" />
      </div>
      
      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>

      <Modal
        title="Создать диалог"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Закрыть
          </Button>,
          <Button
            disabled={!messageText}
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={onModalOk}>
            Создать
          </Button>,
        ]}
      >
        <Form className="add-dialog__form">
          <Form.Item label="Введите имя пользователя или E-Mail">
            <Select
            showSearch
            value={inputValue}
            placeholder='Введите имя пользователя или почту'
            style={{ width: "100%" }}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={onSearch}
            onChange={onChangeInput}
            onSelect={onSelectUser}
            notFoundContent={null}
            >
              {options}
            </Select>
          </Form.Item>
          {selectUserId && <Form.Item label="Введите текст сообщения">
            <TextArea
              value={messageText}
              onChange={onChangeTextArea}
              placeholder="Введите текст сообщения"
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>}
        </Form>
      </Modal>
    </div>
  )
}

Sidebar.defaultProps = {
  users: []
}

export default Sidebar;
