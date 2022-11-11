import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particlesConfig";
// import Typed from 'react-typed';
// import Tilt from 'react-tilt'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from "@mui/material/colors";


import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...{
      // palette values for dark mode
      primary: grey,
      divider: grey[100],
      background: {
        default: grey[900],
        paper: grey[900],
      },
      text: {
        primary: '#fff',
        secondary: grey[300],
      },
    }
  },
});

function App() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

return (
  <>
  <div style={{ position: 'absolute'}}>
  <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
    />
  </div>
  <ThemeProvider theme={darkTheme}>
  <CssBaseline />
  <Header/>
  <Main/>
  <Footer/>
  </ThemeProvider>
  {/* <div style={{ position: 'absolute'}}>
  <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
    />
    </div>
    <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column",height:"100vh"}}>
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
                 <Tilt className="Tilt" options={{ max : 90 ,scale: 1}} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner" style={{background:"white", width:"100px", height:"100px",color:"red"}}>hi</div>
                </Tilt>
            </div> */}
           
  </> 
);
}

export default App;
