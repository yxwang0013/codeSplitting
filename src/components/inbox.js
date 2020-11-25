import React from "react";
import { withRouter, Route } from "react-router-dom";
import Stats from './stats'
import Draft from './drafts'

const BaseInbox = (props) => {
  return (
    <>
      <h1>Inbox page</h1>
      <Messages id={props.match.params.userId} />
      <Route path={`/inbox/:userId/statistics`} component={Stats} />
      <Route path={`/inbox/:userId/drafts`} component={Draft} />
    </>
  );
};

export const Messages = (props) => {
  return <h3>Messages for user: {props.id} </h3>;
};

export default withRouter(BaseInbox);
