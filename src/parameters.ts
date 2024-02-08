const foo = (arg1: string, arg2: string): void => {};

// T型が関数型を継承する
// P型は推論された引数型である
// Tは必ず関数型になるので、その引数を配列化したタプル型を返す
type MyParameters<T extends (...args: string[]) => void> = T extends (
  ...args: infer P
) => void
  ? P
  : never;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
