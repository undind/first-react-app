import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import { filesApi } from 'utils/api';

import { ChatInput as ChatInputBase } from 'components';

const ChatInput = ({
  fetchSendMessage, currentDialogId
}) => {
  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;
  
  const [value, setValue] = useState('');
  const [isRecording, setIsRecording] = useState('');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [emojiPickerVisible, setShowEmojiPicker] = useState('');
  const [isLoading, setLoading] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  }

  const onRecording = stream => {
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.start();

    recorder.onstart = () => {
      setIsRecording(true);
    };

    recorder.onstop = () => {
      setIsRecording(false);
    };

    recorder.ondataavailable = e => {
      const file = new File([e.data], 'audio.webm');
      setLoading(true);

      filesApi.upload(file).then(({ data }) => {
        sendAudio(data.file._id).then(() => {
          setLoading(false);
        });
      });
    };
  };

  const onError = err => {
    console.log('The following error occured: ' + err);
  };

  const sendAudio = audioId => {
    return fetchSendMessage({
      text: null,
      dialogId: currentDialogId,
      attachments: [audioId],
    });
  };

  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setShowEmojiPicker(false)
    }
  }

  const sendMessage = () => {
    if (isRecording) {
      mediaRecorder.stop();
    } else if (value || attachments.length) {
      fetchSendMessage({
        text: value,
        dialogId: currentDialogId,
        attachments: attachments.map(file => file.uid),
      });
      setValue('');
      setAttachments([]);
    }
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  }
  
  const onStopRecording = () => {
    setIsRecording(false)
  }

  const addEmoji = ({ colons }) => {
    setValue((value + ' ' + colons).trim())
  }

  const onSelectFiles = async files => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);
      uploaded = [
        ...uploaded,
        {
          uid,
          name: file.name,
          status: 'uploading',
        },
      ];
      setAttachments(uploaded);
      // eslint-disable-next-line no-loop-func
      await filesApi.upload(file).then(({ data }) => {
        uploaded = uploaded.map(item => {
          if (item.uid === uid) {
            return {
              status: 'done',
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url,
            };
          }
          return item;
        });
      });
    }

    setAttachments(uploaded);
  };

  useEffect(() => {
    const el = document.querySelector('.chat-input__smile-btn');
    document.addEventListener('click', handleOutsideClick.bind(this, el))
    return () => {
      document.removeEventListener('click', handleOutsideClick.bind(this, el))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!currentDialogId) {
    return null;
  }

  return (
    <ChatInputBase 
      value={value}
      setValue={setValue}
      addEmoji={addEmoji}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      handleSendMessage={handleSendMessage}
      sendMessage={sendMessage}
      attachments={attachments}
      onSelectFiles={onSelectFiles}
      isRecording={isRecording}
      onRecord={onRecord}
      onStopRecording={onStopRecording}
    />
  )
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
