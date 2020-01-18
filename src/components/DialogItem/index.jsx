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

const renderLastMessage = (message, userId) => {
  let text = '';
  if (!message.text && message.attachments.length) {
    text = 'прикрепленный файл';
  } else {
    text = message.text;
  }

  return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

const DialogItem = ({ _id, isMe, partner, currentDialogId, lastMessage, userId }) => (
  <Link to={`/dialog/${_id}`}>
    <div 
      className={classNames("dialogs__item", {"dialogs__item--online" : partner.isOnline, 'dialogs__item--selected': currentDialogId === _id})}
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
            {renderLastMessage(lastMessage, userId)}
          </p>
          {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed}/>}
          {lastMessage.readed > 0 && <div className="dialogs__item-unread-count">
            {lastMessage.readed > 9 ? '+9' : lastMessage.readed}
          </div>}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
