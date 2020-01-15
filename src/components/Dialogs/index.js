import React from 'react';

import { Input, Empty } from 'antd';

import { DialogItem } from '../';

import './Dialogs.scss';

const { Search } = Input;

const byField = (field) => {
  return (a, b) => a[field] > b[field] ? -1 : 1;
}

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Search
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? items.sort(byField('created_at')).map((item) => (
      <DialogItem
        {...item}
        key={item._id}
        isMe={item.author._id === userId}
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
