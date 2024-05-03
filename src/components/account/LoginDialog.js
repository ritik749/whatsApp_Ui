import React, { useContext } from 'react';

import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/apiCall';

const Component = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Containor = styled(Box)`
  padding: 56px 0 56px 56px;
  height: ;
`;

const QrCode = styled('img')({
  height: 300,
  width: 300,
  margin: '50px 0 0 50px',
});

const Title = styled(Typography)`
  font-size: 38px;
  font-weight: 300;
  line-height: normal;
  color: #41525d;
  margin-bottom: 24px;
`;

const StyledList = styled(List)`
  & > li {
    paddign: 0;
    margin-top: 15px;
    font-size: 28px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
};

function LoginDialog() {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    //const decoded = jwt_decode(res, { header: true });
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    //  console.log(decoded);
    //  let resp = await addUser(decoded);

    //  console.log('addUser=-=-= ',resp);
  };

  const onLoginError = (err) => {};
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Containor>
            <Title>To Use WhatsApp on your Computer</Title>
            <StyledList>
              <ListItem>1. Open WhatsApp in your Phone</ListItem>
              <ListItem>2. Tap Menu settings and select WhatsApp web</ListItem>
              <ListItem>3. Point your phone to this screen to capture the Code</ListItem>
            </StyledList>
          </Containor>

          <Box style={{ position: 'relative' }}>
            <QrCode src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"></QrCode>

            <Box style={{ position: 'absolute', top: '50%' }}>
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
}

export default LoginDialog;
