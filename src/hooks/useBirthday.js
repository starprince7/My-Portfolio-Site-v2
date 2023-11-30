import { useState, useEffect } from "react";

export const useBirthDay = (monthString, day) => {
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    // Convert month string to its respective number
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    const month = monthNames.indexOf(monthString.toLowerCase());

    if (month === -1) {
      console.error("Invalid month string");
      return;
    }

    // Get the current date
    const today = new Date();

    // Check if today is the specified birthday
    const isSameMonth = today.getMonth() === month;
    const isSameDay = today.getDate() === day;

    setIsBirthday(isSameMonth && isSameDay);
  }, [monthString, day]);

  return { isBirthday };
};

