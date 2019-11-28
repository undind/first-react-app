import React from 'react';

import { Message, Dialogs } from 'components';

import './Home.scss';

const Home = () => (
  <section className="home">
    <Dialogs items={[
      {
        _id: Math.random(),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isReaded: false,
        created_at: new Date('March 17, 2019 03:24:00'),
        user: {
          _id: 1,
          fullname: 'Ivan Ivanov',
          avatar: null,
        }
      },
      {
        _id: Math.random(),
        text: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isReaded: false,
        created_at: new Date(),
        user: {
          _id: 1,
          fullname: 'Egor Petrov',
          avatar: null,
        }
      },
    ]}
    />

    <Message
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      date={new Date(2019, 10, 21, 18, 0, 0)}
      audio="https://notificationsounds.com/soundfiles/b5b41fac0361d157d9673ecb926af5ae/file-sounds-727-good-morning.mp3"
    />

    {/* <Message 
      isMe={false} 
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1" 
      text="Салам Бро! Салам Бро! Салам Бро! Салам Бро!Салам Бро!Салам Бро!" 
      date={new Date(2019, 10, 21, 18, 0, 0)}
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
      date={new Date(2019, 10, 21, 18, 50, 0)}
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
    /> */}
  </section>
);

export default Home;
