import React from 'react';
import Profile from './profile/profile';
import './App.css';
import myWonderfulImage from "./profile/profile_pic.jfif"

function App() {
  const handleName = (fullName) => alert(` Hi, ${fullName}`);
  return (
    <div className="App">
    <Profile 
      fullName="Zaiem Wissem"
      profession="student"
      bio="learning react !! so never mind the design for now , thanks for understanding ."
      handleName={handleName} 
      > 
      <img className="img" src={myWonderfulImage}  alt="pf-pic" />
    </Profile>
  </div>
  );
}

export default App;
