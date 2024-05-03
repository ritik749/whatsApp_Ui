import React, { useState } from 'react'

import {MoreVert as MoreIcon, MoreVert} from '@mui/icons-material'

import { Menu,MenuItem } from '@mui/material';
import styled from '@emotion/styled';

const MenuOptions = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4A4A4A;
  
`

function HeaderMenu({setOpenDrawer}) {
    const [open,setOpen] = useState(null);
    
    const handleClose = ()=>{
        setOpen(null);
    }
    const handleClick = (e)=>{
        setOpen(e.currentTarget);
    }
  return (
    
    <>
    <MoreVert onClick={handleClick}/>
    <Menu
    
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1 ={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={
            {
                vertical:'top',
                horizontal:'right'
            }
        }
      
      >
        <MenuOptions onClick={()=>{handleClose();setOpenDrawer(true)}}>Profile</MenuOptions>
     
      </Menu>
     
    </>
  )
}

export default HeaderMenu