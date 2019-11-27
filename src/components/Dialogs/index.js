import React from 'react';

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items }) => (
  <div className="dialogs">
    {
      items.map((item, index) => (
        <DialogItem 
          user={item.user}
          message={item.lastMessage}
          unreaded={0}
          key={index}
        />
      ))
    }
  </div>
);

export default Dialogs;
