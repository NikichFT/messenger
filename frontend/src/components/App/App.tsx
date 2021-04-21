import React from 'react';
import ListChats from '../ListChats/ListChats';
import ListGroups from '../ListGroups/ListGroups';
import './App.scss';

function App() {
  return (
    <div className="app">
      <ListGroups />
      <ListChats />
    </div>
  );
}

export default App;
