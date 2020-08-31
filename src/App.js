import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Profile from './components/Profile/Profile.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Setting from './components/Setting/Setting.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
