// Tは受け取る第一引数型(number配列)、Uは受け取る第二引数型(generics型)である
// UをTの前に連結した配列型を返す
type Unshift<T extends readonly number[], U> = [U, ...T];

type UnSiftResult = Unshift<[1, 2], 0>; // [0, 1, 2,]
