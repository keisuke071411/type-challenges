// Tは受け取る第一引数型(number配列)、Uは受け取る第一引数型(number配列)である
// TとUを連結した配列型を返す
type Concat<T extends number[], U extends number[]> = [...T, ...U];

type ConcatResult = Concat<[1], [2]>; // expected to be [1, 2]
