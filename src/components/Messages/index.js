import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from 'components';

const Messages = ({ items }) => {
  return items ? (
    <div>
      {items.map(item => (
        <Message
          {...item}
          key={item._id}
        />))}
    </div>
    ) : (
    <Empty description={
      <span>
        Нет сообщений...
      </span>
    } />)
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
