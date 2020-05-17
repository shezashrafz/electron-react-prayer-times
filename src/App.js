import React from 'react';
import DailySalah from './components/salah/daily-salah'
import './App.scss';
import moment from 'moment-hijri'
import DateTime from './components/date-time/date-time';

function App() {
  return (
    <div>
      <div className="App-header">
        <DateTime />
      </div>
      <div className="App">
        <div className="App-body">
          <DailySalah date={moment().format('DD/MM')} liveTimes={true} />

        </div>
      </div>
    </div>
  );
}

export default App;
