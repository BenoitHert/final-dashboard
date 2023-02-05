import { useState } from 'react';
import Calendar from 'react-calendar';
import '../data/calendar.css'

function Calendars() {
    const [date, setDate] = useState(new Date());
  return (
    <div className='pl-80 pt-20'>
      <div className='calendar-container pt-20 pl-64'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          onClickDay={(value, event) => alert('Clicked day: ', value)}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );

}

export default Calendars



