import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { IconReaded } from '../';

import './DialogItem.scss';

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm")
  } else {
    return format(created_at, "dd.MM.yy")
  }
}

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
          {getMessageTime(message.created_at)}
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          {message.text}
        </p>
        <IconReaded isMe={true} isReaded={message.isReaded}/>
        {unreaded > 0 && <div className="dialogs__item-unread-count">{unreaded}</div>}
      </div>
    </div>
  </div>
);

export default DialogItem;
