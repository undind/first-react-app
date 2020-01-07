import React from 'react';
import { Button } from 'antd';

import { Messages, ChatInput, Status, Sidebar } from 'containers';

import './Home.scss';

const Home = () => (
  <section className="home">
    <div className="chat">
      <Sidebar />
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div></div>
          <Status online />
          <Button type="link" shape="circle" icon="ellipsis" style={{ fontSize: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} />
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>


    {/* <Dialogs items={[
      {
        _id: "390cd96d085e319fc300e2e175eb1d50",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isReaded: false,
        created_at: '2019-11-29T18:31:42+03:30',
        user: {
          _id: "390cd96d085e319fc300e2e175eb1d50",
          fullname: 'Ivan Ivanov',
          avatar: "https://sun1.43222.userapi.com/c855124/v855124025/c074c/M2uI9C1Xpts.jpg?ava=1",
        }
      },
      {
        _id: "0be3275f693decda053f69a7b62df510",
        text: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isReaded: false,
        created_at: '2019-11-30',
        user: {
          _id: "0be3275f693decda053f69a7b62df510",
          fullname: 'Egor Petrov',
          avatar: null,
        }
      },
    ]}
    /> */}

    {/* <Message
      avatar="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1"
      date='2019-12-02T16:31:42+03:30'
      audio="https://notificationsounds.com/soundfiles/b5b41fac0361d157d9673ecb926af5ae/file-sounds-727-good-morning.mp3"
    />

    <Message 
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
