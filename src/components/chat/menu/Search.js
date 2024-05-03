import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Box, InputBase} from '@mui/material'
import styled from '@emotion/styled';

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items:center;
`;

const Wrapper = styled(Box)`
  background-color: #f2f2f5;
  position: relative;
  margin: 3px 13px;
  border-radius: 8px;
  width: 100%;
  

`;
// display: flex;
//   background: #f2f2f2;
//   align-items: center;
//   border-radius: 10%;
//   justify-content: center;

const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 10px;
  color: #919191;
  
`;

const InputField = styled(InputBase)`
    width:100%;
    padding: 16px;
    height: 15px;
    margin-left: 65px;
    font-size: 14px;

`



function Search() {
  return (
    <Component>

         <Wrapper>
            <Icon>
               <SearchIcon fontSize='small'/>
            </Icon>
           <InputField placeholder='Search or Start a New Chat' />
            
         </Wrapper>

    </Component>
  )
}

export default Search