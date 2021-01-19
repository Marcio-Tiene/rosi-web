const PhoneFilter: (phone: string) => string[] = (phone: string) =>
  phone.split('').filter((character) => !isNaN(Number(character)));

const Phonehandler: (phone: string) => number = (phone: string) => {
  const phoneOnlyNumbers = PhoneFilter(phone);
  phoneOnlyNumbers.unshift('55');

  const formatedPhoneInStringFormat = phoneOnlyNumbers.join('');
  console.log(formatedPhoneInStringFormat);

  return Number(formatedPhoneInStringFormat);
};

export default Phonehandler;
