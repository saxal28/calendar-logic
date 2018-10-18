let date = new Date();

const days = [
  'Sunday',
  'Monday',
  "Tuesday",
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]


// ================================
// actions
// ================================



function nextMonth(dateToUpdate) {
  const date = new Date(dateToUpdate);
  const month = date.getMonth();

  const updatedDate = date.setMonth(month + 1);
  return getCalendarDates(updatedDate);
}

function previousMonth(dateToUpdate) {
  const date = new Date(dateToUpdate);
  const month = date.getMonth();

  const updatedDate = date.setMonth(month - 1);
  return getCalendarDates(updatedDate);
}


// ================================
// helpers
// ================================


function isDate(date) {
   return typeof date.getMonth === 'function';
}

function getDaysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getCalendarDates(dateToFetch) {

  const date = new Date(dateToFetch);
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay();

  const daysInMonth = getDaysInMonth(month, year);
  const calendarStartDay = getCalendarStartDay(date);
  const calendarEndDay = getCalendarEndDay(date);

  return {
    date,
    month,
    year,
    dayOfMonth,
    dayOfWeek,
    daysInMonth,
    calendarStartDay,
    calendarEndDay,
  }

}

 function getCalendarStartDay(dateToFetch) {
    const day = new Date(dateToFetch.setDate(1)).getDay();
    console.log('Month Starts on a', days[day]);
    return day;
  }

  function getCalendarEndDay(dateToFetch) {
    const month = dateToFetch.getMonth();
    const year = dateToFetch.getMonth();
    const lastDayOfMonth = getDaysInMonth(month, year);

    const day = new Date(dateToFetch.setDate(lastDayOfMonth)).getDay();

    console.log('Month Ends on a', days[day], lastDayOfMonth, day);
    return day;

  }

  function getDayOfWeekByDate(dateToFetch) {
    const date = new Date(dateToFetch);
    const day = date.getDay();
  }

  function mapDays(dateToFetch) {
    const month = dateToFetch.getMonth();
    const year = dateToFetch.getFullYear();
    const lastDayOfMonth = getDaysInMonth(month, year);

    console.log(dateToFetch)
    console.log(lastDayOfMonth)

    for(var i = 1; i <= lastDayOfMonth; i++) {
      const dayDate = new Date(year, month, i);
      const dayIndex= dayDate.getDay();
      const dayOfWeek = days[dayIndex];
      const day = dayDate.getDate();

      console.log({
        dayDate,
        day,
        dayOfWeek,
        dayIndex
      })
    }

  }


// ================================
// testing
// ================================

// console.log('NEXT MONTH', nextMonth(date));
console.log('\n\n=========================\n\n')
console.log('THIS MONTH', getCalendarDates(date));
console.log('\n\n=========================\n\n')

// console.log('calendar', getCalendarEndDay(date))
// console.log('LAST MONTH', previousMonth(date));

console.log('\n\n=========================\n\n')
mapDays(date);
console.log('\n\n=========================\n\n')
