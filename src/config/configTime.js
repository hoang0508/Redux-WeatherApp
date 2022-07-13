function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[a.getDay()];
  const time = day;
  return time;
}

export default timeConverter;
// + date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
