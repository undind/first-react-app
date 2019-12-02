import React from 'react';
import { Icon, Input, Button } from 'antd';

import { Message, Dialogs, Status, ChatInput } from 'components';

import './Home.scss';

const { Search } = Input;

const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <Icon type="team" />
            <span>Список диалогов</span>
          </div>
          <Button type="link" shape="circle" icon="form" />
        </div>
        <div className="chat__sidebar-search">
          <Search
            placeholder="Поиск среди контактов"
          />
        </div>
        <div className="chat__sidebar-dialogs">
          <Dialogs items={[
            {
              "_id": "125de52fc77434193cbf2cf92b",
              "text": "Voluptate ipsum aliqua dolor labore esse voluptate occaecat ut dolore reprehenderit irure Lorem. Voluptate consectetur nostrud exercitation voluptate culpa veniam magna elit quis commodo Lorem nisi magna qui. Elit adipisicing ea Lorem ut aliquip elit mollit ullamco.",
              "created_at": "2019-12-02T18:16:05",
              "user": {
                "_id": "6bac3d9a1d4152cb0947801f1a83782d",
                "fullname": "Wyatt Brewer",
                "avatar": null
              }
            },
            {
              "_id": "125de52fc72061b841b401b9b3",
              "text": "Quis laboris dolore consequat dolore officia ipsum qui dolor cupidatat cillum. Eu aliqua pariatur elit voluptate excepteur id pariatur culpa non amet tempor aliqua aliqua. Tempor laborum ex occaecat do excepteur amet quis cillum labore eiusmod ipsum sint.",
              "created_at": "2015-07-24T10:52:58",
              "user": {
                "_id": "29274c24c7a273c1ea5f00b80e90d4e7",
                "fullname": "Jennifer Villarreal",
                "avatar": null
              }
            },
            {
              "_id": "65de52fc70c7e89b037ac7bfa",
              "text": "Voluptate labore incididunt quis aliquip duis amet minim est deserunt non anim. Lorem sit proident culpa sunt duis voluptate aliqua aute magna deserunt labore ipsum laborum cillum. Id culpa eu ea cupidatat.",
              "created_at": "2018-05-19T10:28:58",
              "user": {
                "_id": "efeb9a31d0be22871a6fb615dc4efe27",
                "fullname": "Nichole Bolton",
                "avatar": null
              }
            },
            {
              "_id": "65de52fc780e43dc9a3447b11",
              "text": "Minim consectetur occaecat proident aliquip nostrud nisi ullamco ut sint cillum occaecat cillum sunt minim. Excepteur consequat nostrud eiusmod occaecat occaecat labore anim pariatur elit commodo adipisicing quis nulla. Incididunt exercitation consectetur proident esse.",
              "created_at": "2016-01-09T06:13:26",
              "user": {
                "_id": "0b5df532aa7388cffbf60196632f9d8f",
                "fullname": "Bolton Browning",
                "avatar": null
              }
            },
            {
              "_id": "15de52fc72a762d1582e01dea",
              "text": "Duis deserunt adipisicing irure irure nostrud sunt eiusmod ad veniam esse. Et proident dolor irure tempor ut occaecat commodo ad laborum. Ullamco exercitation excepteur commodo ad commodo.",
              "created_at": "2019-11-02T11:50:23",
              "user": {
                "_id": "4d8fc82f9fa92d99d5cdf2ae79f84575",
                "fullname": "Caroline Joyner",
                "avatar": null
              }
            },
            {
              "_id": "65de52fc7d7aa38de4c4a8fbe",
              "text": "Consectetur occaecat pariatur voluptate voluptate aliquip ullamco nulla. Proident dolore quis sint consequat sit nisi duis veniam ex reprehenderit ipsum. Voluptate adipisicing aute Lorem non eu.",
              "created_at": "2017-07-24T05:09:46",
              "user": {
                "_id": "c89baf344518008e319eeddf0dfcfbc3",
                "fullname": "Lolita Alexander",
                "avatar": null
              }
            },
            {
              "_id": "125de52fc72067d92c4836393f",
              "text": "Minim magna elit sit exercitation sunt eiusmod ipsum amet. Sit laboris cillum adipisicing velit laboris fugiat enim nostrud. Consectetur officia elit consectetur consectetur ea cillum.",
              "created_at": "2019-08-12T05:02:14",
              "user": {
                "_id": "ea8adab48b129adf1550098bc402e9e8",
                "fullname": "Love Hardin",
                "avatar": null
              }
            },
            {
              "_id": "45de52fc70b7f031cae3f9d6f",
              "text": "Ipsum adipisicing consectetur adipisicing duis tempor sit ipsum ea nostrud enim. Sunt qui sunt ea culpa velit. Aute do magna ipsum nulla non do exercitation exercitation ex dolore magna elit non sunt.",
              "created_at": "2017-03-21T01:36:06",
              "user": {
                "_id": "a0b9ec76f171ebc07fa23394e39f77c2",
                "fullname": "Schwartz Bruce",
                "avatar": null
              }
            },
            {
              "_id": "105de52fc7a5e45da03f9dc627",
              "text": "Amet aliquip laboris ipsum aute pariatur elit eu amet cupidatat sint. Commodo sunt id ex duis dolor et nisi ea qui. Do quis enim sint duis ea dolor duis.",
              "created_at": "2014-08-23T04:37:21",
              "user": {
                "_id": "febf64cb78d40730d41c85600343e58d",
                "fullname": "Judith Oneill",
                "avatar": null
              }
            },
            {
              "_id": "125de52fc7ae5492fc32dc231f",
              "text": "Elit ad esse adipisicing nisi do. Sint mollit eiusmod duis reprehenderit. Ea aliquip non fugiat nostrud.",
              "created_at": "2015-04-18T11:55:14",
              "user": {
                "_id": "008906bc33f50b11f0843504e9df202f",
                "fullname": "Brock Henderson",
                "avatar": null
              }
            },
            {
              "_id": "125de52fc7cfc67a946d2d4847",
              "text": "Ut incididunt elit cillum reprehenderit ut qui. Irure nulla exercitation exercitation Lorem voluptate aliquip voluptate sit. Reprehenderit est voluptate tempor minim irure enim.",
              "created_at": "2015-01-20T06:26:24",
              "user": {
                "_id": "6005887dc96488f5ac45204425527894",
                "fullname": "Bertha Leblanc",
                "avatar": null
              }
            },
          ]}
          />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div></div>
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Sergey Antonov</b>
            <div className="chat__dialog-header-status">
              <Status online={true} />
            </div>
          </div>
          <Button type="link" shape="circle" icon="ellipsis" style={{ fontSize: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} />
        </div>
        <div className="chat__dialog-messages">
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
