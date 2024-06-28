import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './profilePage.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

export default function ProfilePage() {
  const { user } = useAuth(); // Assuming user details are retrieved from context or hook
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.details}>

        <div className={classes.profileSection}>
          <div className={classes.profileLabel}>Name:</div>
          <div className={classes.profileValue}>{user.name}</div>
        </div>

        <div className={classes.profileSection}>
          <div className={classes.profileLabel}>Address:</div>
          <div className={classes.profileValue}>{user.address}</div>
        </div>

        <div className={classes.buttons}>
            <Button text="Edit Details" onClick={
              ()=>{
                navigate('/editprofile');
              }
            }/>
        </div>
      </div>
    </div>
  );
}
