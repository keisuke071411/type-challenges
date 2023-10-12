type Arr1 = ["a", "b", "c"];
type Arr2 = [3, 2, 1];

// inferは型を推論し、型を割り出すやつ
// Tは文字配列か、数値配列である
// Tは１つ目の値の型であるFirstVal、それ以外の値の型であるOtherValに分けて考ることができるとする
// 真であればFirstはFirstValであり、分けて考えることができなければnever=推論できないとなる
// 疑であることはない（多分）ので、実質「最初の値の型」を実現できる
type First<T extends string[] | number[]> = T extends [
  infer FirstVal,
  ...infer OtherVal
]
  ? FirstVal
  : never;

type Head1 = First<Arr1>;
type Head2 = First<Arr2>;
