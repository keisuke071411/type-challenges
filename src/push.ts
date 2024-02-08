// Tは受け取る第一引数型(number配列)、Uは受け取る第二引数型(generics型)である
// TとUを連結した配列型を返す
type Push<T extends readonly number[], U> = [...T, U];

type PushResult = Push<[1, 2], "3">; // [1, 2, '3']
