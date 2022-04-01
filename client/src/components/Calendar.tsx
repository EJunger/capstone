import React, { Component, useState, useEffect } from 'react'

import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'

const sched = require('scheduler-calendar');


const Calendar = () => {

  //terniarry, uses JSON.parse() if returned true (not null), and uses hardcoded object (after colon) if it is null
  const [availabilities, setAvailabilities] = useState([])

  useEffect(() => {
    setAvailabilities(localStorage.getItem('availabilities') 
    ? JSON.parse(localStorage.getItem('availabilities')) : [
      {
        day: "mon",
        slots: [
          { from: '09:00', to: '10:30' },
          { from: '11:30', to: '13:00' },
          { from: '14:30', to: '17:00' },
        ],
        comment: "Test comment"
      },
      {
        day: "2021-01-26",
        slots: [
          { from: '09:00', to: '10:30' },
          { from: '11:30', to: '19:00' },
        ]
      },
    ])


  }, [])







  return(
      <><SchedulerCalendar
      availabilities={availabilities}
      availabilityType={''}
      duration={10}
      onIntervalChange={(a) => {
        //setting state with a (current data on local storage)
        setAvailabilities(a)
        localStorage.setItem('availabilities', JSON.stringify(a))
        
      
      
      
      
      } }
      is24hour={false} 
      initialRenderOfRows={3}
      //topHeaderTitleStyle={}

      
      
      />
      
      
      
      
      
      </>
            
  )
    
}

function blockOff(startTime, endTime) {
  sched.availabilities.push([startTime, endTime]);


}

export default Calendar;