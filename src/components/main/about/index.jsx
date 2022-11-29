import React from 'react'

import Zoom  from 'react-reveal/Zoom';
import Tilt from 'react-tilt'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

export default function About() {
  return (
    <Container maxWidth={false} sx={{height:"100vh",background:"#212121",display:"flex",flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",}}>
        <Zoom>
                <Stack direction="row" spacing={2} sx={{mb:4}}>
                    <Typography sx={{fontFamily: "'Fredoka One', sans-serif",
                    fontSize: "53px",
                    color:"#84fff1"}}>About</Typography>
                    <Typography sx={{fontFamily: "'Fredoka One', sans-serif",
                    fontSize: "53px",
                    color:"#fff"}}>Me</Typography>
                </Stack>
                </Zoom >
                <Box sx={{display:"flex",flexDirection:"row",
    justifyContent:"center",
    alignItems:"start",width:"70%"}}>
        <Box>
            <Zoom>
               
                <Tilt className="Tilt" options={{ max : 20 ,scale: 1,}} style={{ height: 250, width: 250 }} >
                <Avatar sx={{width:"200px",height:"200px"}} src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg" />
                </Tilt>
                </Zoom >
        </Box>
        <Box>
        <Zoom>
            <Typography sx={{fontFamily: "'Open Sans', sans-serif",
            fontSize: "33px",
            color:"#fff",
            fontWeight:600}}>I'm Rohit</Typography>
        </Zoom >
        <Zoom>
            <Typography sx={{fontFamily: "'Open Sans', sans-serif",
            fontSize: "18px",
            color:"#e1e1e1",
            fontWeight:600,
            my:2}}>Passionate Full Stack Developer | Freelancer</Typography>
        </Zoom >
        <Zoom>
            <Typography sx={{fontFamily: "'Open Sans', sans-serif",
            fontSize: "18px",
            color:"#bbbbbb"}}>Since beginning my journey nearly 5 years ago, I've done remote work for agencies and collaborated with talented people to create digital content for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.</Typography>
        </Zoom >
        </Box>
        </Box>
</Container>
  )
}
