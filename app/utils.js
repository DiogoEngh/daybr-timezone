const currentDate = () => {
  const currentDate = new Date();
  currentDate.setUTCHours(currentDate.getUTCHours() - 3);
  return currentDate;
};

const convertToUtc = (date) => {
  date = new Date(date)?.setUTCHours(new Date(date)?.getUTCHours() - 3);
  return new Date(date);
};

const isBissext = (date) => {
  const year = new Date(date).getFullYear();

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

const daysInMonth = (date) => {
  const daysInYear = [
    31, // Janeiro
    isBissext(date) ? 29 : 28, // Fevereiro (29 em anos bissextos)
    31, // Março
    30, // Abril
    31, // Maio
    30, // Junho
    31, // Julho
    31, // Agosto
    30, // Setembro
    31, // Outubro
    30, // Novembro
    31, // Dezembro
  ];
  const days = daysInYear[new Date(date)?.getMonth()];
  return days;
};

module.exports = { currentDate, convertToUtc, daysInMonth, isBissext };
