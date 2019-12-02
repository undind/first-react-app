import React from 'react';
import orderBy from 'lodash/orderBy';

import { Input, Empty } from 'antd';

import { DialogItem } from '../';

import './Dialogs.scss';

const { Search } = Input;

const Dialogs = ({ items, userId, onSearch, inputValue }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Search
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? orderBy(items, ['created_at'], ['desc']).map((item, index) => (
      <DialogItem
        {...item}
        key={item._id}
        isMe={item.user._id === userId}
      />
    )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={
      <span>
        Ничего не найдено...
      </span>
    } />}
  </div>
);

export default Dialogs;
