import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import { useAuthContext } from '../context/AuthContext';

export default function Header() {
    const { currentUser, logIn, logOut } = useAuthContext();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const buttonText = currentUser ? "Log Out" : "Log In";
    const handleAuthClick = () => currentUser ? logOut() : logIn('student_mentor');

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" top={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mentor Notes
            </Typography>
            <Button color="inherit" onClick={handleAuthClick}>{buttonText}</Button>
          </Toolbar>
        </AppBar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem id='setup' onClick={handleClose}>Setting Up Your Report</MenuItem>
          <MenuItem id='instructions' onClick={handleClose}>Instructions</MenuItem>
        </Menu>
      </Box>
    );
}
