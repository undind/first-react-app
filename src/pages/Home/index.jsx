import React from 'react';

import { Message } from 'components';

import './Home.scss';

const Home = () => (
  <section className="home">
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
    />
  </section>
);

export default Home;
