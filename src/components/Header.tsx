import React from 'react';

const Header = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      {props.loggedIn?
        <div>
          <h1>{props.name}</h1>
          <h4>@{props.name.toLowerCase().split(' ').join('')}</h4>
          <p>{props.name}'s Education Showwcase</p>
        </div>
        :
        <div>
          <h1>Welcome</h1>
          <p>Welcome to your Education Showwcase. Please enter your name below to begin.</p>
        </div>
      }
    </React.Fragment>
  );
};

export default Header;
