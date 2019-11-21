import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import readedSvg from "assets/img/readed.svg";
import noReadedSvg from "assets/img/noreaded.svg";

import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, isReaded }) => (
  <div className={classNames('message', { 'message--isme': isMe })}>
    <div className="message__content">
      {isMe && isReaded ? (
      <img 
        className="message__icon-readed" 
        src={readedSvg} 
        alt="Readed Icon" 
      />) : (
        <img 
        className="message__icon-readed" 
        src={noReadedSvg} 
        alt="No readed Icon" 
      />)}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</span>
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
  isMe: false
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object
};

export default Message;
