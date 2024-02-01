import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './main.css'
import { useTranslation, Trans } from 'react-i18next';
//i18n import
import i18n from './components/i18n';

function App () {

  const { t, i18n } = useTranslation();

  return(
    <>
    <Navbar/>
    <Body/>
    </>
  )
}


export default App
