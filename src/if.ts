// Cはboolean型、T型、F型を継承している
// Cがtrueを継承していた場合はT型、falseの場合はF型を返す
type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
