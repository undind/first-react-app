import React from 'react';

import { Input, Empty } from 'antd';

import { DialogItem } from '../';

import './Dialogs.scss';

const { Search } = Input;

const byField = (field) => {
  return (a, b) => a[field] > b[field] ? -1 : 1;
}

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId, onSelectDialog }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Search
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? items.sort(byField('created_at')).map((item, index) => (
      <DialogItem
        onSelect={onSelectDialog}
        {...item}
        key={item._id}
        isMe={item.user._id === userId}
        currentDialogId={currentDialogId}
      />
    )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={
      <span>
        Ничего не найдено...
      </span>
    } />}
  </div>
);

export default Dialogs;
