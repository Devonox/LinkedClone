import React from 'react';

import './App.css';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed.js';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        {/* {Widgets} */}
      </div>
    </div>
  );
}

export default App;
