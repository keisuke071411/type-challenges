type ReadTodo = {
  title: string;
  description: string;
};

// Tで渡した型を1つずつ取り出す
// 中身のデータの型をそのまま新しくデータの型として再定義
// PにはTのkeyが挿入される
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const readTodo: MyReadonly<ReadTodo> = {
  title: "Hey",
  description: "foobar"
};

readTodo.title = "Hello";
readTodo.description = "barFoo";
