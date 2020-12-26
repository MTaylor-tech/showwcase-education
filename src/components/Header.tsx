import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  display: inline;
  margin: 10px 20px 10px 0;
  width: 100px;
  height: 100px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OverallContainer = styled.div`
  display: flex;
`;

const Header = (props: any): JSX.Element => {
  return (
    <OverallContainer>
      <Logo src="ShowwcasLogo100x100.png" />
      {props.loggedIn?
        <HeaderContainer>
          <h1>{props.name}</h1>
          <h4>@{props.name.toLowerCase().split(' ').join('')}</h4>
          <p>{props.name}'s Education Showwcase</p>
        </HeaderContainer>
        :
        <HeaderContainer>
          <h1>Welcome</h1>
          <p>Welcome to your Education Showwcase. Please enter your name below to begin.</p>
        </HeaderContainer>
      }
    </OverallContainer>
  );
};

export default Header;
