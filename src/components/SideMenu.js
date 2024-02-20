'use client';

import React from 'react';
import { useState } from 'react';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import Link from 'next/link';

export default function SideMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Mis Personajes', icon: <HomeIcon />, path: '/' },
    { text: 'Amigos', icon: <InfoIcon />, path: '/about' },
    { text: 'Campañas', icon: <InfoIcon />, path: '/about' },
    { text: 'Explorar', icon: <InfoIcon />, path: '/about' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Tu aplicacion
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <Button color="inherit">Salir</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}