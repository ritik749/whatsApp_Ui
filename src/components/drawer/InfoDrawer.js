import styled from '@emotion/styled';
import { ArrowBack } from '@mui/icons-material';
import { Drawer, Box, Typography } from '@mui/material';
import React from 'react';
import Profile from './Profile';

const drawerStyle = {
  top: 23,
  left: 20,
  height: '95%',
  width: '30%',
  boxShadow: 'none',
};

const Text = styled(Typography)`
  font-size: 18px;
`;

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

function InfoDrawer({ openDrawer, setOpenDrawer }) {
  return (
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} PaperProps={{ sx: drawerStyle }} style={{ zIndex: 1500 }}>
      <Header>
        <ArrowBack onClick={() => setOpenDrawer(false)} />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
}

export default InfoDrawer;
