import React from "react";
import LoginDialog from "./Account/LoginDialog";
import { AppBar, Toolbar, styled,Box } from "@mui/material";

const Outer = styled(Box)`
height:100vh;
background-color:#DCDCDC;
`

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {
  return (
    <Outer>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Outer>
  );
};

export default Messenger;
