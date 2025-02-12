import { useContext, useEffect, useState } from "react";
import { CupCountriesContext } from "../../Contexts/CountriesContext";
import Escalation from "../../Components/Escalation/Escalation";
import { FORMATION_OPTIONS } from "../../Constants";
import { Formation } from "../../Cup";

const EscalationPage = () => {
  const { cupCountries } = useContext(CupCountriesContext);

  const [formation, setFormation] = useState<Formation>(FORMATION_OPTIONS[0]);

  useEffect(() => {
    const formationSelect = document.getElementById(
      "formation-select"
    ) as HTMLInputElement;

    formationSelect.addEventListener("change", (e) => {
      const selectedValue = (e.target as HTMLSelectElement).value;
      setFormation(
        FORMATION_OPTIONS.find(
          (formation) => formation.name === selectedValue
        ) || FORMATION_OPTIONS[0]
      );
    });
  }, [formation]);

  return (
    <div>
      <h1>EscalationPage</h1>
      {cupCountries[0]?.name?.common} {cupCountries[0]?.flag}
      <div>
        <select id="formation-select">
          {FORMATION_OPTIONS.map((formation) => (
            <option value={formation.name}>{formation.name}</option>
          ))}
        </select>
        <Escalation formation={formation} />
      </div>
    </div>
  );
};

export default EscalationPage;
