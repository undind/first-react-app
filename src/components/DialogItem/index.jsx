import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';
import { Link } from 'react-router-dom';

import { IconReaded, Avatar } from '../';

const getMessageTime = created_at => {
  const parseCreate_at = parseISO(created_at);
  if (isToday(parseCreate_at)) {
    return format(parseCreate_at, "HH:mm")
  } else {
    return format(parseCreate_at, "dd.MM.yy")
  }
}

const DialogItem = ({ _id, isMe, partner, onSelect, currentDialogId, lastMessage }) => (
  <Link to={`/dialog/${_id}`}>
    <div 
      className={classNames("dialogs__item", {"dialogs__item--online" : partner.isOnline, 'dialogs__item--selected': currentDialogId === _id})}
      onClick={onSelect.bind(this, _id)}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partner}/>
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{partner.fullname}</b>
          <span>
            {getMessageTime(lastMessage.createdAt)}
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>
            {lastMessage.text}
          </p>
          {isMe && <IconReaded isMe={true} isReaded={lastMessage.readed}/>}
          {lastMessage.unread > 0 && <div className="dialogs__item-unread-count">
            {lastMessage.undread > 9 ? '+9' : lastMessage.undread}
          </div>}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
