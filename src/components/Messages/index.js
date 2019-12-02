import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from 'components';

const Messages = ({ items }) => {
  return items ? (<div>
    <Message
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      date='2019-12-02T16:31:42+03:30'
      audio="https://notificationsounds.com/soundfiles/b5b41fac0361d157d9673ecb926af5ae/file-sounds-727-good-morning.mp3"
    />

    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
        }
      ]}
    />
    <Message
      avatar="https://sun9-11.userapi.com/c855124/v855124025/c074c/M2uI9C1Xpts.jpg?ava=1"
      text="Hello me!"
      date="2017-01-25T02:33:27"
      isMe={true}
      isReaded={true}
    />
    <Message
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      isTyping
    />
    <Message
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
        }
      ]}
    />
    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
    />
    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
    />
    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
    />
    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
    />
    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
    />
    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
    />
    <Message
      isMe={false}
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!"
      date="2018-04-22T05:12:02"
    />
  </div>) : (<Empty description={
    <span>
      Нет сообщений...
    </span>
  } />)
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
