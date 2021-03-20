import React, { useState } from "react";

const ProfileStatus2 = (props) => {
  const [toggle, editToggle] = useState(false);

  const [status, editStatus] = useState(props.status);

  const handleClick = () => {
    editToggle(true);
  };

  const onChange = (e) => {
    editStatus(e.currentTarget.value);
  };

  const upDateStatus = () => {
    editToggle(false);
    props.updateUserStatusThunk(status);
  };

  return (
    <>
      {toggle ? (
        <span>
          <input
            autoFocus={true}
            value={status}
            onChange={onChange}
            onBlur={upDateStatus}
          />
        </span>
      ) : (
        <span onClick={handleClick}>{props.status || "----"}</span>
      )}
    </>
  );
};

export default ProfileStatus2;
