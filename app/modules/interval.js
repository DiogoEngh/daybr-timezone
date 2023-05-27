//intervalDate
const intervalOfMilliseconds = (initialDate, finalDate) => {
  const interval =
    new Date(initialDate)?.getUTCMilliseconds() -
    new Date(finalDate)?.getUTCMilliseconds;
  return -interval;
};

const intervalOfSeconds = (initialDate, finalDate) => {
  const interval =
    new Date(initialDate)?.getUTCSeconds() -
    new Date(finalDate)?.getUTCSeconds();
  return -interval;
};

const intervalOfMinutes = (initialDate, finalDate) => {
  const interval =
    new Date(initialDate)?.getUTCMinutes() -
    new Date(finalDate)?.getUTCMinutes();
  return -interval;
};

const intervalOfHours = (initialDate, finalDate) => {
  const interval =
    new Date(initialDate)?.getUTCHours() - new Date(finalDate)?.getUTCHours();
  return -interval;
};

const intervalOfDays = (initialDate, finalDate) => {
  const interval =
    new Date(initialDate)?.getUTCDate() - new Date(finalDate)?.getUTCDate();
  return -interval;
};

const intervalOfWeeks = (initialDate, finalDate) => {
  const interval = Math.abs(
    (new Date(initialDate)?.getUTCDate() - new Date(finalDate)?.getUTCDate()) /
      7
  );
  return -interval;
};

const intervalOfMonths = (initialDate, finalDate) => {
  const interval =
    new Date(initialDate)?.getUTCMonth() - new Date(finalDate)?.getUTCMonth();
  return -interval;
};

const intervalOfYears = (initialDate, finalDate) => {
  const interval =
    new Date(initialDate)?.getUTCFullYear() -
    new Date(finalDate)?.getUTCFullYear();
  return -interval;
};

module.exports = {
  intervalOfMilliseconds,
  intervalOfSeconds,
  intervalOfMinutes,
  intervalOfHours,
  intervalOfDays,
  intervalOfWeeks,
  intervalOfMonths,
  intervalOfYears,
};
