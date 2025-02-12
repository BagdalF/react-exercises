import { createContext, useEffect, useState } from "react";
import { COUNTRIES_API } from "../Constants";
import { Country } from "../Cup";
import { randomPickerArray } from "../utils/randomUtils";

export const CupCountriesContext = createContext<{
  cupCountries: Country[];
}>({
  cupCountries: [],
});

const CountriesContextProvider = ({ children }: any) => {
  const [cupCountries, setCupCountries] = useState<any[]>([, , , , , , , ,]);

  useEffect(() => {
    const fetchCountries = async () => {
      let result = await fetch(COUNTRIES_API)
        .then((data) => data.json())
        .catch((error) => console.error(error));

      result = result.filter((country: any) => country.population > 1000000);

      setCupCountries(
        cupCountries.fill(null).map((country) => {
          return (country = randomPickerArray(result, cupCountries));
        })
      );
      console.log(cupCountries);
    };
    fetchCountries();
  }, []);

  return (
    <CupCountriesContext.Provider value={{ cupCountries }}>
      {children}
    </CupCountriesContext.Provider>
  );
};

export default CountriesContextProvider;
