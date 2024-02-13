interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Tはオブジェクト型
// KはTのオブジェクト型のプロパティ名であり、指定されたプロパティ名
// OmitでTからKを除外したものを作成
// PickでTからKだけを抽出し、readonlyを付与
type MyReadonly2<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

const readonlyTodo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false
};

readonlyTodo.title = "Hello"; // Error: cannot reassign a readonly property
readonlyTodo.description = "barFoo"; // Error: cannot reassign a readonly property
readonlyTodo.completed = true; // OK
