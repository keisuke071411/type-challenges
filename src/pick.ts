interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// T型とT型のkeyをU型として受け取っている
// keyにはK型という制約設け、そのvalueにはkeyに紐づく値という制約も設ける
type MyPick<T, U extends keyof T> = {
  [key in U]: T[key];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};
