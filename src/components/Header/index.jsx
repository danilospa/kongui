import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './index.css'

class Dashboard extends Component {
  render() {
    return(
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className="header__container"> 123 </div>
        </Grid>
      </Grid>
    )
  }
}

export default Dashboard;
