// Chainableはoptionメソッドとgetメソッドを持つ
// getメソッドはR(object)型を返す
// optionメソッドはkeyとなる文字列とvalueとなる型を受け取り、Chainable型を再帰的に返す
// <R & Record<K, V>>で、使用されたkeyとvalueをRとして追加する
// KはRのkeyを継承しているので、keyがRに存在する場合はneverとなり、keyが重複することはない
// 値が異なる場合にはキーの繰り返しを許可する
// R & Record<K, V> はキーの値を結合するため、OmitでR上の以前のKを省略する
type Chainable<R = object> = {
  option<K extends string, V>(
    key: K extends keyof R ? (V extends R[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<R, K> & Record<K, V>>;
  get(): R;
};

declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface ChainableOptionsResult {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
