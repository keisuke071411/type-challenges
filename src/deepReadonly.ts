type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

// Tがオブジェクト型でない場合(Tのkeyがneverの場合)、Tを返す
// Tがオブジェクト型ある場合、readonlyを付与する
// kはTのkeyであり、T[k]がオブジェクト型の場合、再帰的にDeepReadonlyを適用(最初に戻って処理する)
// T[k]がオブジェクト型でない場合、T[k]をそのまま返す
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };

type DeepReadonlyTodo = DeepReadonly<X>;
