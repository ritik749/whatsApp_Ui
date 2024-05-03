import React, { useContext, useEffect, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box, styled } from '@mui/material';
import { Chat as MessageIcon } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%',
});

const Wrapper = styled(Box)`
 
margin-left:auto;

& > * {
    margin-left: 2px;
    padding : 8px;
    color:#000;
};
// check first child is not working 
&:first-child {
    background-color: yellow;
    padding 40px;
  }

`;

function Header() {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    console.log('=-=-----x--x-x-x-----', account);
  }, []);

  return (
    <>
      <Component>
        <Image
          src={account.picture}
          onClick={() => {
            setOpenDrawer(true);
          }}
        />

        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>

      <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
}

export default Header;
