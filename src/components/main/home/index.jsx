import React from 'react'

import Typed from 'react-typed';
import Zoom  from 'react-reveal/Zoom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <Container maxWidth={false} sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"       
    }}>
    <Box sx={{width:"50%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column"}}>
    <Typography sx={{
        fontFamily: "'Fredoka One', sans-serif",
        fontSize: "53px",
        color:"#84fff1"
    }}>Hi There,</Typography>
    <Stack direction="row" spacing={2} sx={{mb:4}}>
    <Typography sx={{
        fontFamily: "'Fredoka One', sans-serif",
        fontSize: "53px",
        color:"#84fff1"
    }}>I'm</Typography>
    <Typography sx={{
        fontFamily: "'Fredoka One', sans-serif",
        fontSize: "53px",
        color:"#fff"
    }}>Rohit</Typography>
    </Stack>
    <Typography sx={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "33px",
        color:"#84fff1",
    }}>I Am Into</Typography>
      <Typed
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "33px",
            color:"#fff"
        }}
              // typedRef={typedRef()}
              loop
              typeSpeed={50}
              backSpeed={20}
              strings={["Full-Stack Development", "Mobile-App Development", "Open Source"]}
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
    <Box sx={{
        width:"50%"
    }}>

    </Box>
</Container>
  )
}
