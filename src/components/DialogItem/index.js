import React from 'react';
import classNames from 'classnames';

import { Time, IconReaded } from '../';

import './DialogItem.scss';

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img src="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1" alt="" />
    )
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, unreaded }) => (
  <div className={classNames("dialogs__item", {"dialogs__item--online" : user.isOnline})}>
    <div className="dialogs__item-avatar">
      {/* <img scr={user.avatar} alt={`${user.fullname}`} /> */}
      {getAvatar("https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1")}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Ivan Ivanov</b>
        <span>
          {/* <Time date={new Date(2019, 10, 21, 18, 0, 0)} />  */}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Lorem ipsum dolor sit amet...
        </p>
        <IconReaded isMe={true} isReaded={false}/>
        {unreaded > 0 && <div className="dialogs__item-unread-count">{unreaded}</div>}
      </div>
    </div>
  </div>
);

export default DialogItem;
