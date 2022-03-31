import React, { Component } from 'react'

import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'

const sched = require('scheduler-calendar');


const Calendar = () => {
  return(
      <><SchedulerCalendar
      availabilities={[
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
      ]}
      availabilityType={''}
      duration={10}
      onIntervalChange={() => { } }
      is24hour={false} />
      
      
      
      
      
      </>
            
  )
    
}

function blockOff(startTime, endTime) {
  //sched.availabilities.push{[startTime, endTime]}


}

export default Calendar;