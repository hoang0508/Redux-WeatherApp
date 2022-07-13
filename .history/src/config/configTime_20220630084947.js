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
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = days[a.getDay()];
  // var year = a.getFullYear();
  // var month = months[a.getMonth()];
  // var date = a.getDate();
  // var hour = a.getHours();
  // var min = a.getMinutes();
  // var sec = a.getSeconds();
  const time = day;
  return time;
}

export default timeConverter;
// + date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
