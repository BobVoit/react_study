import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import Profile from './components/Profile/Profile.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Setting from './components/Setting/Setting.jsx';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer  />} />
          <Route path="/profile" render={() => 
            <Profile 
              
            />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
