import React from 'react';

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {
      items.map((item, index) => (
        <DialogItem 
          user={item.message.user}
          message={item.message}
          unreaded={0}
          key={item._id}
          isMe={item.message.user._id === userId}
        />
      ))
    }
  </div>
);

export default Dialogs;
