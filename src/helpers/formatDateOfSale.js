export default function formatDateOfSale(inputDate) {
  const date = new Date(inputDate);

  // Formatting date as dd/mm/yyyy
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  // Formatting time as hh:mm AM/PM
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes();
  const amOrPm = date.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${amOrPm}`;

  return { formattedDate, formattedTime };
}
