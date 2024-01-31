import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './main.css'

//i18n import
import i18n from './components/i18n';

function App () {
  return(
    <>
    <Navbar/>
    <Body/>
    </>
  )
}


export default App
