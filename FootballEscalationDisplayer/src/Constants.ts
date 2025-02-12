import { Formation } from "./Cup";

export const PLAYERS_API = "https://randomuser.me/api/?results=20";
export const COUNTRIES_API =
  "https://restcountries.com/v3.1/all?fields=name,flag,population";
export const FORMATION_OPTIONS: Formation[] = [
  { name: "433", playersAttack: 3, playersMidfield: 3, playersDefense: 4 },
  { name: "343", playersAttack: 3, playersMidfield: 4, playersDefense: 3 },
  { name: "523", playersAttack: 3, playersMidfield: 2, playersDefense: 5 },
  { name: "442", playersAttack: 2, playersMidfield: 4, playersDefense: 4 },
  { name: "352", playersAttack: 2, playersMidfield: 5, playersDefense: 3 },
  { name: "451", playersAttack: 1, playersMidfield: 5, playersDefense: 4 },
  { name: "532", playersAttack: 2, playersMidfield: 3, playersDefense: 5 },
  { name: "541", playersAttack: 1, playersMidfield: 4, playersDefense: 5 },
];
