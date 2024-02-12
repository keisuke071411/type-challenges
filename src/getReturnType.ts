const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

// Tがfn型を継承していれば、
// 「推論されたR型＝継承している関数の戻り値の型」を返す
type MyReturnType<T> = T extends (...args: boolean[]) => infer R ? R : never;

type GetReturnType = MyReturnType<typeof fn>; // should be "1 | 2"
