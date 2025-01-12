import React, { useState } from 'react';

const Settings = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Suman Adhikari');
  const [bio, setBio] = useState(localStorage.getItem('bio') || 'Web Developer & Designer');

  const handleSaveSettings = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('bio', bio);
    alert('Settings saved!');
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label>Bio: </label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button onClick={handleSaveSettings}>Save</button>
    </div>
  );
};

export default Settings;
