import styled from '@emotion/styled'
import { Box, Typography,Divider } from '@mui/material'
import React from 'react'

const Component = styled(Box)`

 background:#f8f9fa;
 padding: 30px 0;
 text-align:center;
 height:100vh;
`

const Containor = styled(Box)`
  padding:0 200px; 

`
const Image = styled('img')({
   width:400,
   marginTop:100
   
}) 

const Title = styled(Typography)`

  font-size:32px;
  font-weight:300;
  margin:25px 0 10px 0;
  color: #41525d;

`
const Subtitle = styled(Typography)`
 color:#667781;
 font-size:14px;
`;

const StyleDivider = styled(Divider)`

  margin: 40px 0;
  opacity: 0.4
`
function EmptyChat() {
  return (
    <Component>
        <Containor>
            <Image src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg" alt="emptyChat not Found"/>
            <Title>WhatsApp Web</Title>
            <Subtitle>Now Send and Receive messages Without keeping your phone online</Subtitle>
            <Subtitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same Time</Subtitle>
            <StyleDivider/>
        </Containor>

    </Component>
   
  )
}

export default EmptyChat