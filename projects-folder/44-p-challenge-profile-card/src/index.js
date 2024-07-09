import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function App() {

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.webp" alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Teddy Bear </h1>
      <p>sdlkjfglsjljd slfjsljj ljflsfjka lafldjf lsfjlskfj sldffjsl fl fjflkgriwnsfskreiru sldfn sldjf fslieujr df </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" backgroundColor="#FFD700" />
      <Skill skill="CSS" backgroundColor="#00FFFF" />
      <Skill skill="Javascript" backgroundColor="#8A2BE2" />
      <Skill skill="React" backgroundColor="#32CD32" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.skill}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
