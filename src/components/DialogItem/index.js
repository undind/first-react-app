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
  if (!avatar) {
    return (
      <img src="https://sun9-21.userapi.com/c831408/v831408737/a797b/AOuegaEIaeA.jpg?ava=1" alt="" />
    )
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, unreaded, isMe, created_at, text }) => (
  <div className={classNames("dialogs__item", {"dialogs__item--online" : user.isOnline})}>
    <div className="dialogs__item-avatar">
      {getAvatar(user.avatar)}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {getMessageTime(created_at)}
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          {text}
        </p>
        {isMe && <IconReaded isMe={true} isReaded={true}/>}
        {unreaded > 0 && <div className="dialogs__item-unread-count">{unreaded}</div>}
      </div>
    </div>
  </div>
);

export default DialogItem;
