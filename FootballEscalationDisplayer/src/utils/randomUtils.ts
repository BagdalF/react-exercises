export const randomPickerArray = (result: any, arr: any): any => {
  const randomCountry = result[Math.floor(Math.random() * result.length)];

  if (
    arr.some((comparedCountry: any) =>
      comparedCountry
        ? comparedCountry.common.name === randomCountry.common.name
        : false
    )
  ) {
    randomPickerArray(result, arr);
  }
  return randomCountry;
};
