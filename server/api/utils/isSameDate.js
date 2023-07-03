export const isSameDate = (date1, date2) => {
  return (date1.toDateString() === date2.toDateString());
}