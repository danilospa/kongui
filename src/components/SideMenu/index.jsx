import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './index.css';

class SideMenu extends Component {
  state = {
    open: true,
  }
  render() {
    return (
      <div>
        <List component="nav">
          <ListItem button component="a" href="#">
            <ListItemText primary="Status" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Routes" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Route" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Consumer" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Plugin" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Certificate" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="SNI" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Upstream" />
          </ListItem>
          <ListItem button component="a" href="#">
            <ListItemText primary="Target" />
          </ListItem>
        </List>
      </div>
    );
  }
}  


export default SideMenu;