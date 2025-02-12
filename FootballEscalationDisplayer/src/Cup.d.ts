export interface Country {
  name: { common: string };
  flag: string;
}

export interface Formation {
  name: string;
  playersAttack: 1 | 2 | 3;
  playersMidfield: 2 | 3 | 4 | 5;
  playersDefense: 3 | 4 | 5;
}
