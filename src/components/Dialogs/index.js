import React from 'react';
import orderBy from 'lodash/orderBy';

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ['created_at'], ['desc'] ).map((item, index) => (
      <DialogItem
        {...item}
        key={item._id}
        isMe={item.user._id === userId}
      />
    ))}
  </div>
);

export default Dialogs;
