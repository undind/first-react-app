import React from 'react';

import { Time, IconReaded } from '../';

import './DialogItem.scss';

const DialogItem = ({ user, message }) => (
  <div className="dialogs__item">
    <div className="dialogs__item-avatar">
      {/* <img scr={user.avatar} alt={`${user.fullname}`} /> */}
      <img src="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1" alt="" />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Ivan Ivanov</b>
        <span><Time date={new Date(2019, 10, 21, 18, 0, 0)} /></span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <IconReaded isMe={true} isReaded={false}/>
      </div>
    </div>
  </div>
);

export default DialogItem;
