import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar/Navbar';
import styles from './App.module.css';

import HomePage from './pages/Home/Home.page';
import RoomsPage from './pages/Rooms/Rooms.page';
import SingleRoomPage from './pages/SingleRoom/SingleRoom.page';
import ErrorPage from './pages/Error.page';

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Switch>
          <Route exact path="/rooms/:slug" component={SingleRoomPage} />
          <Route exact path="/rooms" component={RoomsPage} />
          <Route exact path="/" component={HomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
