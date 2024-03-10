import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

 function N() {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar>
          
          <Link href="/Reg" >LOGIN</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/">BACK</Link>
        </Toolbar>
      </AppBar>
    </Box>  
  );
}

export default N;