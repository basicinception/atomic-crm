export const getCurrentDate = () => {
  // fix timezone bugs
  // const now = new Date();
  // const offset = now.getTimezoneOffset();
  // const localDate = new Date(now.getTime() - offset * 60 * 1000);
  // return localDate.toISOString().slice(0, 16);
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const formatNoteDate = (dateString: string) => {
  const date = new Date(dateString);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.toISOString();
};
