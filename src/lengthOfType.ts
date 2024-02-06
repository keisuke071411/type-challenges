type Tesla = ["tesla", "model 3", "model X", "model Y"];
type SpaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

// T配列にlengthを指定することで、配列の長さを取得することができる
type Length<T extends readonly string[]> = T["length"];

type TeslaLength = Length<Tesla>; // expected 4
type SpaceXLength = Length<SpaceX>; // expected 5
