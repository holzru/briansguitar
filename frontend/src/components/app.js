import React, { Component } from 'react';
import { Titlebar } from './titlebar';

export const App = ({children}) => {
  return(
    <div className='app' id='app'>
      { children }
    </div>
  )
};
