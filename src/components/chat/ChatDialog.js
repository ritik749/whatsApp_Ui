import { Dialog,styled,Box,  } from '@mui/material'
import React, { startTransition } from 'react'
import EmptyChat from './chat/EmptyChat';
import Menu from './menu/Menu'


const Component = styled(Box)`
     display: flex;
     height:100%;
`

const LeftSide = styled(Box)`
   min-width: 450px;
   
   font-family: inherit;
   
`;

const RightSide = styled(Box)`

   width: 73%;
   min-width: 300px;
   border-left : 1px solid rgba(0,0,0,0.14);
   font-family: inherit;
`;
const dialogStyle ={
    height:'95%',
    margin:'20px',
    width:'100%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius: '0',
    overflow:'hidden',
    backgroundColor:'none'

}
function ChatDialog() {
  return (
        
   <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true} maxWidth={'md'}>
   <Component>
    <LeftSide>
        <Menu/>
        
    </LeftSide>
    <RightSide>
          <EmptyChat />
    </RightSide>
   </Component>
  
  </Dialog>  

  )
}

export default ChatDialog