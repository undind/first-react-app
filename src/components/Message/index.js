import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';

import { convertCurrentTime } from 'utils/helpers';

import { Time, IconReaded } from '../';

import './Message.scss';

const Message = ({ avatar, 
  user, 
  text, 
  date, 
  isMe, 
  isReaded, 
  audio, 
  attachments, 
  isTyping 
}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioElem = useRef(null);

  useEffect(() => {
    audioElem.current.volume = 0.1;
    audioElem.current.addEventListener('playing', () => {
      setIsPlaying(true)
    }, false);

    audioElem.current.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }, false);

    audioElem.current.addEventListener('pause', () => {
      setIsPlaying(false)
    }, false);

    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress(((audioElem.current.currentTime / duration) * 100) + (duration * 0.5));
    });
  }, [])

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  };

  return (
    <div className={classNames('message', { 
      'message--isme': isMe, 
      'message--is-typing': isTyping,
      'message--is-audio': audio,
      'message--image': attachments && attachments.length === 1,
    })}>
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded}/>
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (<div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {
              audio && 
              (<div className="message__audio">
              <audio ref={audioElem} src={audio} preload="auto" />
                <div className="message__audio-progress" style={{ width: progress + '%' }}></div>
                <div className="message__audio-info">
                  <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                      {isPlaying ? (<img src={pauseSvg} alt="Pause svg"/>) : (<img src={playSvg} alt="Play svg"/>)}
                    </button>
                  </div>
                  <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg"/>
                  </div>
                  <span className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                  </span>
                </div>
              </div>)
            }
          </div>)}
            {attachments && (<div className="message__attachments"> 
              {attachments.map((item, index) => (
                <div key={index} className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
              </div>
            )}
          {date && <span className="message__date"><Time date={date}/></span>}
        </div>
      </div>
    </div>
  );
}

const Message1 = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) => (
  <div className={classNames('message', { 'message--isme': isMe, 'message--is-typing': isTyping, 'message--image': attachments && attachments.length === 1 })}>
    <div className="message__content">
      <IconReaded isMe={isMe} isReaded={isReaded}/>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__info">
        {(text || isTyping) && (<div className="message__bubble">
          {text && <p className="message__text">{text}</p>}
          {isTyping && <div className="message__typing">
            <span></span>
            <span></span>
            <span></span>
          </div>}
        </div>)}
        <div className="message__attachments">
          {
            attachments && attachments.map((item, index) => (
              <div key={index} className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))
          }
        </div>
        {date && <span className="message__date"><Time date={date}/></span>}
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string
};

export default Message;
