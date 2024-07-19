import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('Terra');

  return (
    <div>
      <img src="profile-pic.jpg" alt="Profile" />
      <h2>{name}</h2>
    </div>
  );
}

export default Profile;
