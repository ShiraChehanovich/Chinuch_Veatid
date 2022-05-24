import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BoyIcon from '@mui/icons-material/Boy';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
import Table from './Table';
import { useAuth } from './context/AuthContext'
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const drawerWidth = 240;

export default function PopingMenu() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const { currentUser, logout  } = useAuth()
  async function handleLogout(){
    setError('')
    try{
        await logout()
        navigate("/login")
    }
    catch(err){
        setError("Failed to log out: "+ err)
        console.log(err)
    }
  };
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Table/> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Typography paragraph>
        </Typography>
        {/* <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          
        </Typography> */}
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <img  src="https://chv.org.il/wp-content/uploads/2019/06/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%95%D7%9C%D7%91_2-1024x251.png" width="100%"></img>
        {/* <Toolbar /> */}
        <Divider />
        <List>
          {['תיק תלמיד', 'תיק צוות', 'תיק כיתה', 'יומן אישי'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <BoyIcon /> :index === 1 ?<PeopleIcon /> :index === 2 ? <SchoolIcon /> :<CalendarMonthIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>

          {[currentUser.email,'התנתקות'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <MailIcon /> : <LogoutIcon onClick={handleLogout} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
