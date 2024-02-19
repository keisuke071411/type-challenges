type Arr = ["1", "2", "3"];

// Tは読み取り専用の文字配列である
// T[number]のnumberは、配列のindexである
// T[number]は、配列の中の値の型である
// これによって、配列の中の値をユニオン型に変換する型を作成することができる
type TupleToUnion<T extends readonly string[]> = T[number];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
