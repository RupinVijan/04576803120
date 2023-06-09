exports.getTrainsForNext12Hours = (trainData) => {
  // fetching trains for the next 12 hours
  let today = new Date();
  let currentHour = today.getHours();
  let currentMinute = today.getMinutes();
  let currentSecond = today.getSeconds();
  let result = [];

  for (const train of trainData) {
    let mins = train.departureTime.Minutes + train.delayedBy;
    let hours = train.departureTime.Hours;

    if (currentHour >= 12) {
      if (hours < 12) {
        hours = hours + 24; // Convert to 24-hour format
      }
    }

    if (mins >= 60) {
      mins = mins - 60; // Adjust minutes
      hours = hours + 1; // Increment hours
    }

    // Check if the train falls within the next 12 hours
    if (hours - currentHour <= 12 && hours - currentHour >= 0) {
      if (hours - currentHour === 0) {
        if (mins - currentMinute >= 30) {
          // If the train departs within the current hour and has at least 30 minutes remaining
          result.push(train);
        }
      } else {
        if (hours - currentHour === 12) {
          if (mins - currentMinute <= 0) {
            // If the train departs exactly 12 hours from the current hour and has not yet departed
            result.push(train);
          }
        } else {
          // For all other trains within the next 12 hours
          result.push(train);
        }
      }
    }
  }

  return result; // Return the filtered train list
};
