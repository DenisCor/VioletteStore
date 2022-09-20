import React, {useState} from 'react'
import {Drawer, IconButton} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const DrawerComp = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(!open)}>
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>
            Hello
          </ListItemText>
        </ListItemIcon>
      </ListItemButton>
</Drawer>


      <IconButton  onClick={() => setOpen(true)}>
      <MenuRoundedIcon/>
      </IconButton>
    </>
  )
}

export default DrawerComp;