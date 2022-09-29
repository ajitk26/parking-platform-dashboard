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
    <div className="todoContainer">
      <div className="todoTitle">
        <Typography variant="h9" color="inherit">
          TO DO LIST
        </Typography>
        <Divider />
      </div>

      <List component="nav" label="To do list">
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
      <div>
        <Typography variant="h9" color="inherit">
          VEHICLE ON FIELD
        </Typography>
        <Divider />
        <List sx={style} component="nav" label="Vehicle-on-field" className="dashboardVehicleList">
          <ListItem button divider>
            <ListItemText primary="Tempo" />
            <ListItemText primary="26" sx={{ color: 'blue' }} />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Non-Tempo" />
            <ListItemText primary="0" sx={{ color: 'blue' }} />
          </ListItem>
        </List>
      </div>
    </div>
  )
}

export default Todo
