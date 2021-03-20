import React from "react";
import style from "./Messages.module.css";
import MessageUsers from "./MessagesUsers";
import MessageItem from "./MessageItem";
import { Field, Form } from "react-final-form";

const MessageArea = (props) => {
  return (
    <Form
      onSubmit={(values) => props.sendMessage(values.messageAreaValue)}
      render={({ handleSubmit, submitting, pristine }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name={"messageAreaValue"}>
              {({ input }) => {
                return (
                  <>
                    <textarea {...input} placeholder={"message"} />
                  </>
                );
              }}
            </Field>
            <br />
            <button disabled={submitting || pristine}>Send</button>
          </form>
        );
      }}
    ></Form>
  );
};

const Messages = (props) => {
  let userElement = props.userData.map((u) => (
    <MessageUsers id={u.id} name={u.name} />
  ));
  let messageElement = props.messageData.map((m) => (
    <MessageItem id={m.id} message={m.message} />
  ));

  return (
    <div className={style.messages}>
      <div className={style.messageUsers}>{userElement}</div>
      <div className={style.message}>
        {messageElement}
        <MessageArea sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};
export default Messages;
