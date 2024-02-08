// T型のx番目にU型が含まれているかどうかを判定する
// 含まれていればtrue、含まれていなければfalseを返す
type Includes<T extends readonly string[], U> = U extends T[number]
  ? true
  : false;

type IsPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
