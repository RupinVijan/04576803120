exports.sortingTrainData = (trainData) => {
  let result = trainData;
  // Sorting based on sleeper seat price in ascending order
  result.sort((a, b) => a.price.sleeper - b.price.sleeper);

  // Sorting based on total seats available in descending order
  result.sort((a, b) => {
    const aTotalSeats = a.seatsAvailable.sleeper + a.seatsAvailable.AC;
    const bTotalSeats = b.seatsAvailable.sleeper + b.seatsAvailable.AC;
    return bTotalSeats - aTotalSeats;
  });

  // Sorting based on departure time in descending order
  result.sort((a, b) => {
    if (a.departureTime.Hours !== b.departureTime.Hours) {
      return a.departureTime.Hours - b.departureTime.Hours;
    } else if (
      a.departureTime.Minutes + a.delayedBy !==
      b.departureTime.Minutes + b.delayedBy
    ) {
      return (
        a.departureTime.Minutes +
        a.delayedBy -
        b.departureTime.Minutes +
        b.delayedBy
      );
    } else {
      return a.departureTime.Seconds - b.departureTime.Seconds;
    }
  });
  return result;
};
