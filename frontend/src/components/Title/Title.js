import React from 'react';
import classes from './title.module.css';

export default function Title({ title, fontSize, margin }) {
  return <div className={classes.titleContainer}>
    <h2 style={{ fontSize, margin, color: '#fff'}} className={classes.title}>{title}</h2>
  </div>;
}
