import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material'
const style = {
  width: '100%',
  maxWidth: 360,
}

const Todo = () => {
  return (
    <>
      <div className="todo">
        <Typography variant="h9" color="inherit" sx={{ boxShadow: 0 }}>
          TO DO LIST
        </Typography>
        <Divider />
      </div>

      <List sx={style} component="nav" label="To do list">
        <ListItem button divider>
          <ListItemText primary="Extension" />
          <ListItemText primary="2" sx={{ color: 'red' }} />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="CarWave" />
          <ListItemText primary="26" sx={{ color: 'red' }} />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Audit" />
          <ListItemText primary="0" sx={{ color: 'red', paddingLeft: 3 }} />
        </ListItem>
        <Divider />
      </List>
    </>
  )
}

export default Todo
