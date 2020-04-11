import React from "react";

export default function CurrentDate(props) {
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  let day = props.date.getDate();
  let months = props.date.getMonth();
  let montharray = [
    " January",
    " February",
    " March",
    " April",
    " May",
    " June",
    " July",
    " August",
    " September",
    " October",
    " November",
    " December",
  ];
  let month = montharray[months];

  function zerominutes(minute) {
    return (minute < 10 ? "0" : "") + minute;
  }
  function zerohours(hour) {
    return (hour < 10 ? "0" : "") + hour;
  }

  return (
    <div>
      <em>Last updated:</em>
      {month}-{day}, {zerohours(hour)}:{zerominutes(minute)}
    </div>
  );
}
