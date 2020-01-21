import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <div>
      <Posts Text = 'Инструкция по запуску двигателя М-601 "Вальтер" самолета Л-410'  />
    </div>
  );
}

export default Profile