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

  const posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Gucci flip flap", likesCount: 11 },
    { id: 4, message: "I can study react!", likesCount: 11 },
  ];

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
