const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// Tは読み取り専用の文字配列である
// P(objectのkey)は、Tの中の値の型である
// また、P(objectのvalue)は、P(objectのkey)と同一である
// これによって、各値のkey/valueを持つオブジェクトの型に変換する型を作成することができる
type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
};

type Result = TupleToObject<typeof tuple>;
