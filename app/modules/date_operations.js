//sumDate
const addMilliseconds = (dateCurrent, qtdMilliseconds) => {
  const dateResult = new Date(dateCurrent)?.setUTCMilliseconds(
    new Date(dateCurrent)?.getUTCMilliseconds() + qtdMilliseconds
  );
  return new Date(dateResult);
};

const addSeconds = (dateCurrent, qtdSeconds) => {
  const dateResult = new Date(dateCurrent)?.setUTCSeconds(
    new Date(dateCurrent)?.getUTCSeconds() + qtdSeconds
  );
  return new Date(dateResult);
};

const addMinutes = (dateCurrent, qtdMinutes) => {
  const dateResult = new Date(dateCurrent)?.setUTCMinutes(
    new Date(dateCurrent)?.getUTCMinutes() + qtdMinutes
  );
  return new Date(dateResult);
};

const addHours = (dateCurrent, qtdHours) => {
  const dateResult = new Date(dateCurrent)?.setUTCHours(
    new Date(dateCurrent)?.getUTCHours() + qtdHours
  );
  return new Date(dateResult);
};

const addDays = (dateCurrent, qtdDays) => {
  const dateResult = new Date(dateCurrent)?.setUTCDate(
    new Date(dateCurrent)?.getDate() + qtdDays + 1
  );
  return new Date(dateResult);
};

const addWeeks = (dateCurrent, qtdWeks) => {
  const dateResult = addDays(new Date(dateCurrent), qtdWeks * 7);
  return new Date(dateResult);
};

const addMonths = (dateCurrent, qtdMonths) => {
  const dateResult = new Date(dateCurrent)?.setUTCMonth(
    new Date(dateCurrent)?.getMonth() + qtdMonths
  );
  return new Date(dateResult);
};

const addYears = (dateCurrent, qtdYears) => {
  const dateResult = new Date(dateCurrent)?.setUTCFullYear(
    new Date(dateCurrent)?.getUTCFullYear() + qtdYears
  );
  return new Date(dateResult);
};

module.exports = {
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
  addYears,
};
