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
    />
    <Message 
      isMe={true}
      isReaded={true}
      avatar="https://sun9-11.userapi.com/c855124/v855124025/c074c/M2uI9C1Xpts.jpg?ava=1" 
      text="Hello me!" 
      date={new Date(2019, 10, 21, 18, 50, 0)} 
    />
  </section>
);

export default Home;
