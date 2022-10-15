import getNumberFromRange from './getNumberFromRange';

export default function () {
  let num1 = getNumberFromRange(0, 3);
  let num2 = getNumberFromRange(0, 9);
  let num3 = getNumberFromRange(0, 9);

  if (num1 === 3) {
    num2 = getNumberFromRange(0, 1);

    if (num2 === 1) {
      num3 = 0;
    }
  }

  return `https://gitlab.com/dwt1/wallpapers/-/raw/master/0${num1}${num2}${num3}.jpg`;
}
