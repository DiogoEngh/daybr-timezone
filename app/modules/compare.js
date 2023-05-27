//compareDate
const compareMilliseconds = (startDate, endDate) => {
    const dateResult = Math.abs(new Date(startDate).getTime() - new Date(endDate).getTime())
    return dateResult;
  };
  
  const compareSeconds = (startDate, endDate) => {
    const dateResult = Math.abs(Math.floor((compareMilliseconds(startDate, endDate)) / 1000))
    return dateResult;
  };
  
  const compareMinutes = (startDate, endDate) => {
    const dateResult = Math.abs(Math.floor(compareSeconds(startDate, endDate) / 60))
    return dateResult;
  };
  
  const compareHours = (startDate, endDate) => {
    const dateResult = Math.abs(Math.floor(compareMinutes(startDate, endDate) / 60))
    return dateResult;
  };
  
  const compareDays = (startDate, endDate) => {
    const dateResult = Math.abs(Math.floor(compareHours(startDate, endDate) / 24))
    return dateResult;
  };

  const compareWeeks = (startDate, endDate) => {
    const dateResult = Math.abs(Math.floor(compareDays(startDate, endDate) / 7))
    return dateResult;
  };
  
  const compareMonths = (startDate, endDate) => {
    const dateResult = Math.abs(Math.floor(compareDays(startDate, endDate) / 30))
    return dateResult;
  };
  
  const compareYears = (startDate, endDate) => {
    const dateResult = Math.abs(Math.floor(compareMonths(startDate, endDate) / 12))
    return dateResult;
  };
  
  module.exports = {
    compareMilliseconds,
    compareSeconds,
    compareMinutes,
    compareHours,
    compareDays,
    compareWeeks,
    compareMonths,
    compareYears,
  };
  