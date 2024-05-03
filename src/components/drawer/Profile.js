import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import styled from '@emotion/styled';

const ImageContainor = styled(Box)`
   display: flex;
   justify-content: center;
`
const Image = styled('img')({

    height:200,
    width:200,
    borderRadius: '50%',
    padding: '25px 0'
})

const BoxWrapper = styled(Box)`

  background: #FFFFFF;
  padding: 12px 30px 2px ;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  & : first-child{
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  };
  & : last-child{
    padding: 14px 0;
    color: #4A4A4A;
    
  }
`

const DescriptionBox = styled(Box)`

  padding:15px 20px 28px 30px;
  & > p{
    font-size:15px;
    color: #8690a0;
  }
`

function Profile() {
    const {account} = useContext(AccountContext);
  return (
    <>
      <ImageContainor>
          <Image src={account.picture} alt='image not found'/>
      </ImageContainor>

      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>

      </BoxWrapper>

      <DescriptionBox>
         <Typography> This is not your Username or pin.This name will be visible to your WhatsApp Contacts </Typography>
      </DescriptionBox>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Code Without Sleep!</Typography>

      </BoxWrapper>
    </>
  )
}

export default Profile 