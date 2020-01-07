import React from 'react';
import { connect } from 'react-redux';

import { Sidebar as SidebarBase } from 'components';

const Sidebar = ({
  user
}) => {
  return <SidebarBase user={user} />
};

export default connect(({ user }) => ({user: user.data}))(Sidebar);
