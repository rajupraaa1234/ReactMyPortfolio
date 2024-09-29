export function getTimeDurationForExperience(date1, date2) {
    let Difference_In_Time =
      date2.getTime() - date1.getTime();

    let numberOfDays =
      Math.round
        (Difference_In_Time / (1000 * 3600 * 24));
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);
    return years + "." + months;
  }

