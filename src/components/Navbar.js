import React, { useState } from 'react'
import Left from "../assets/images/left.png";
import Right from "../assets/images/right.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, IconButton } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();
  const [matches, setMatches] = useState(useMediaQuery(theme.breakpoints.up('md')))
  const toggle = () => {
    setMatches(!matches)
  }
  const route = (
    <>
      < Link to="/program"> Program</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/news">News</Link>
      <Link to="/history">History</Link>
      <Link to="/donate">Donate</Link>
    </>
  )
  return (
    <div className="App">
      <header className="App-header">
        {
          (!matches) ? (

            <Box sx={{ display: { xs: 'block', md: 'none', sm: 'block' } }}>
              <IconButton onClick={toggle}>
                <Menu className="burger" />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: { xs: 'block', md: 'none', sm: 'block' } }}>
              <IconButton onClick={toggle}>
                <Close className="burger" />
              </IconButton>
            </Box>
          )
        }
        <Box component={LazyLoadImage} src={Left}
          height={60}
          alt="Image Alt"
          sx={{ display: { xs: 'none', md: 'block', sm: 'none' } }}
        />
        <h2>புனித அந்தோணியார் ஆலயம்</h2>
        <Box component={LazyLoadImage} src={Right}
          height={60}
          alt="Image Alt"
          sx={{ display: { xs: 'none', md: 'block', sm: 'none' } }}
        />
      </header>
      <Box className="route-link" sx={{ display: (matches) ? 'flex' : 'none' }}>
        {route}
      </Box>
    </div >
  )
}
