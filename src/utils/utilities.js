export function getFormattedDate(isoString) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(isoString);

  let formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDay()}, ${date.getFullYear()}`;

  return formattedDate;
}
