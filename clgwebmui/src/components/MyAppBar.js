import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import logo from '../logo.jpeg'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import {Menu, MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';
function MyAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // button as anchor
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static " sx={{margin: 0, width: '100%'}}>
      <Toolbar sx={{ justifyContent: "space-between"}}>
        {/* Logo + College name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="" style={{ margin: 3, height: 50 }} />
          <Typography variant="h6" component="div">
            D. Y. Patil College Of Engineering & Technology, Kolhapur
          </Typography>
        </Box>

        {/* Nav buttons */}
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About us</Button>
          <Button color="inherit" component={Link} to="/academics">Academics</Button>
          <Button color="inherit" component={Link} to="/admissions">Admissions</Button>

          {/* Departments dropdown menu */}
          <Button color="inherit" component={Link} to="/departments" onClick={handleClick}>
            Departments
          </Button>
          <Button color="inherit" component={Link} to="/palcement">Placement</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Computer Science</MenuItem>
          <MenuItem onClick={handleClose}>Mechanical Engineering</MenuItem>
          <MenuItem onClick={handleClose}>Civil Engineering</MenuItem>
          <MenuItem onClick={handleClose}>
            Electronics & Telecommunication
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;