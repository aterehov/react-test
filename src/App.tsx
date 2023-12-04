import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { timeStamp } from 'console';

interface saveTimeProps {
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
}

function saveTime(props: saveTimeProps) {
  props.setStartTime((startTime) => new Date());
  
}

function getTime() {
  return new Date();
}

function StartButton(props: saveTimeProps) {
  return (
    <button onClick={() => saveTime(props)}>Старт</button>
  )
}

interface SecFuncProps {
  run: boolean;
  startTime: Date;
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function SecFunc(props: SecFuncProps) {
  while(true) {
    if(props.run) {
      const text = document.getElementById("sectext");
      if(text) {
        text.innerHTML = (new Date().valueOf() - props.startTime.valueOf()).toString();
      }
      
    }
    sleep(200);
  }
}

function SecText() {
  return (
    <p id="sectext">0</p>
  )
}

function App() {
  const [startTime, setStartTime] = useState(new Date());
  const [run, setRun] = useState(false);
  useEffect(() => SecFunc({run, startTime}));
  const stp: saveTimeProps = {
    setStartTime: setStartTime
  }
  return (
    <div>
      <h1>Секундомер</h1>
      <StartButton {...stp} />
      <SecText />
    </div>
  );
}

export default App;
