import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import { Button } from 'antd';
import { connect } from 'react-redux';

import { Messages, ChatInput, Status, Sidebar } from 'containers';

import { dialogsActions } from 'redux/actions';

import './Home.scss';

const Home = (props) => {
  const { setCurrentDialogId, user } = props;
  
  useEffect(() => {
    const { pathname } = props.location;
    const dialogId = pathname.split('/').pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname, setCurrentDialogId, props.location]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        {user && (
          <div className="chat__dialog">
            <div className="chat__dialog-header">
              <div></div>
              <Status />
              <Button type="link" shape="circle" icon="ellipsis" style={{ fontSize: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} />
            </div>
            <div className="chat__dialog-messages">
              <Messages />
            </div>
            <div className="chat__dialog-input">
              <ChatInput />
            </div>
          </div>
        )}
      </div>
    </section>
  )
};

export default withRouter(
  connect(
    ({ user }) => ({ user: user.data }),
    dialogsActions,
  )(Home),
);
