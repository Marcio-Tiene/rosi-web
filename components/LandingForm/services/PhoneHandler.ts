const PhoneFilter: (phone: string) => string[] = (phone: string) =>
  phone.split('').filter((character) => !isNaN(Number(character)));

const Phonehandler: (phone: string) => number = (phone: string) => {
  const phoneOnlyNumbersInStringFormat = PhoneFilter(phone).join('');

  return Number(phoneOnlyNumbersInStringFormat);
};

export default Phonehandler;
