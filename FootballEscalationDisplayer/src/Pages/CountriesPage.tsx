import { useContext } from "react";
import { CupCountriesContext } from "../Contexts/CountriesContext";
import { Country } from "../Cup";
import { Link } from "react-router";

const CountriesPage = () => {
  const { cupCountries } = useContext<{
    cupCountries: Country[];
  }>(CupCountriesContext);

  return (
    <>
      <h2>The Country That You're in is: </h2>
      {cupCountries ? (
        <h1>
          {cupCountries[0]?.name?.common} {cupCountries[0]?.flag}
        </h1>
      ) : (
        <>Loading...</>
      )}

      {cupCountries ? (
        <>
          {cupCountries.map((country: any) => {
            if (country === cupCountries[0]) return;
            return (
              <li key={country?.name?.common}>
                {country?.name?.common} {country?.flag}
              </li>
            );
          })}
        </>
      ) : (
        <>Loading...</>
      )}

      <Link to="/escalation">Play</Link>
    </>
  );
};

export default CountriesPage;
