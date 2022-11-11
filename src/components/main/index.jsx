import React from 'react'
import { styles } from './styles'


import Typed from 'react-typed';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Main() {
  return (
    <>
    <Container maxWidth={false}>
        <Box sx={{height:"100vh"}}>
          <Box>
            <Typed
                style={{color:"white"}}
                    // typedRef={typedRef()}
                    loop
                    typeSpeed={50}
                    backSpeed={20}
                    strings={["welcome to react-typed", "This is a react component that wraps up the <a hre…", "If you like the project add a star in <a href="]}
                    smartBackspace
                    shuffle={false}
                    backDelay={1}
                    fadeOut={false}
                    fadeOutDelay={100}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                />  
          </Box>
          <Box>

          </Box>
        </Box>
    </Container>
    </>
  )
}
