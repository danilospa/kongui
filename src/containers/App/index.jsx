import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import Status from '../../containers/StatusContainer';
import './index.css';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Fragment>
        <Header />
        <div className="mainContent__wrapper">
          <div className="sideBar__wrapper">
            <SideMenu />
          </div>
          <div className="content__wrapper">
            <Route exact path="/" component={Status} />
          </div>
        </div>
      </Fragment>
    </BrowserRouter>
  </Fragment>
);

export default App;
