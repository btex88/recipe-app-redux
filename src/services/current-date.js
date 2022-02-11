const getCurrentDate = () => {
  const date = new Date().toLocaleString().split(',')[0].split('/');
  return [date[1], date[0], date[2]].join('/');
};

export default getCurrentDate;
