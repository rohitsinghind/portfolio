import React from 'react'

import Zoom  from 'react-reveal/Zoom';
import Tilt from 'react-tilt'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

export default function Skills() {
  return (
    <Container maxWidth={false} sx={{minHeight:"100vh",background:"#101010",display:"flex",flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",px:"15%"}}>
        <Zoom>
            <Stack direction="row" spacing={2} sx={{mb:4}}>
                <Typography sx={{fontFamily: "'Fredoka One', sans-serif",
                fontSize: "53px",
                color:"#84fff1"}}>Skills &</Typography>
                <Typography sx={{fontFamily: "'Fredoka One', sans-serif",
                fontSize: "53px",
                color:"#fff"}}>Abilities</Typography>
            </Stack>
        </Zoom >
        <Zoom>
            <Box sx={{display: "grid",
            gridTemplateColumns: "auto auto auto auto auto auto",
            gap:"10px",
            width:"100%",
            '@media (max-width: 850px)': {
            gridTemplateColumns: "auto auto auto",
            '@media (max-width: 550px)': {
                gridTemplateColumns: "auto auto",
            },
            }}}>
                {skills.map((e)=><Tilt className="Tilt" options={{ max : 25 ,scale: 1,}} style={{ height: 150, width: 150 }} ><Paper elevation={8} sx={{p:2, width:"100%",display:"flex",flexDirection:"column",
                alignItems:"center",height:"120px",borderRadius:"20px"}}>
                    <img style={{maxWidth:"100%",maxHeight:"50px",minHeight:"50px"}} src={e.icon}/>  
                    <Typography sx={{fontFamily: "'Open Sans', sans-serif",
                    fontSize: "18px",
                    color:"#bbbbbb",mt:2,
                    }}>{e.title}</Typography>     
                </Paper>
                </Tilt> )}
            </Box>
        </Zoom >
</Container>
  )
}

const skills = [{icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",title:"ReactJS"},
{icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",title:"React Native"},
{
    icon:"https://nodejs.org/static/images/logo.svg",
    title:"NodeJS"
},
{
    icon:"https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png",
    title:"ExpressJS"
},
{
    icon:"https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
    title:"MongoDB"
},
{
    icon:"https://www.gstatic.com/devrel-devsite/prod/v68ffab397cab4b2929d42447c6687d169e807aa5b3dd2e0657c66c185de8e01d/firebase/images/lockup.svg",
    title:"Firebase"
},
{
    icon:"https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    title:"Redux"
},
{
    icon:"https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png",
    title:"Mongoose"
},
{
    icon:"https://v4.mui.com/static/logo_raw.svg",
    title:"MaterialUI"
},
{
    icon:"https://desktop.github.com/images/desktop-icon.svg",
    title:"Git & GitHub"
},
{
    icon:"https://dev.java/assets/images/java-logo-60.png",
    title:"Java"
},
{
    icon:"",
    title:""
},
{
    icon:"",
    title:""
},
{
    icon:"",
    title:""
},
]
