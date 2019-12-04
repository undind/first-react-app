import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';

import { IconReaded, Avatar } from '../';

const getMessageTime = created_at => {
  const parseCreate_at = parseISO(created_at);
  if (isToday(parseCreate_at)) {
    return format(parseCreate_at, "HH:mm")
  } else {
    return format(parseCreate_at, "dd.MM.yy")
  }
}

const DialogItem = ({ _id, user, unread, isMe, created_at, text, onSelect }) => (
  <div 
    className={classNames("dialogs__item", {"dialogs__item--online" : user.isOnline})} 
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user}/>
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
        {unread > 0 && <div className="dialogs__item-unread-count">{unread}</div>}
      </div>
    </div>
  </div>
);

export default DialogItem;
