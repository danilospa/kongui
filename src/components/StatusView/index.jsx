import React, { Component } from 'react';

class StatusView extends Component {
    componentDidMount = () => {
      this.props.getStatus();
    }
  render() {
    return (
      <div> Status </div>
    )
  }
}

export default StatusView;