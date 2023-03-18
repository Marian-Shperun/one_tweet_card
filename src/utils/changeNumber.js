export const changeNumber = number => {
  const numberInString = JSON.stringify(number);

  if (numberInString.length >= 4) {
    switch (numberInString.length) {
      case 7:
        const changedNumber =
          numberInString.slice(0, 1) + ',' + numberInString.slice(1);
        return changedNumber.slice(0, 5) + ',' + numberInString.slice(4);
      case 6:
        return numberInString.slice(0, 3) + ',' + numberInString.slice(3);
      case 4:
        return numberInString.slice(0, 1) + ',' + numberInString.slice(1);

      default:
        break;
    }
  } else {
    return number;
  }
};
