interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Tはオブジェクト型
// KはTのオブジェクト型のプロパティ名であり、指定されたプロパティ名
// PはTのプロパティ名からK分だけ除外したもの
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type OmitTodoPreview = MyOmit<Todo, "description" | "title">;

const toDo: OmitTodoPreview = {
  completed: false
};
