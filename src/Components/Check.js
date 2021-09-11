import React from "react";
import { NavLink } from "react-router-dom";
import UserDetails from "./UserDetails";

const Check = props => {
  const { username, email, city, phone } =
    (props.location && props.location.state) || {};
  return (
    <div>
        <p>{username}</p>
        <UserDetails name={username}/>
        {/*
        <div className="form-details">
        <div>
          <strong>Username:</strong> {username}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div>
      </div>
        */}
      
    </div>
  );
};

export default Check;
