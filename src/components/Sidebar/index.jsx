import React from 'react';
import { Icon, Button } from 'antd';

import { Dialogs } from 'containers';

const Sidebar = ({ user }) => {
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <Icon type="team" />
          <span>Список диалогов</span>
        </div>
        <Button type="link" shape="circle" icon="form" />
      </div>
      
      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>
    </div>
  )
}

export default Sidebar;
