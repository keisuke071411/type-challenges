type ExampleType = Promise<string>;

// Promise<string>の中身を取り出す
type MyAwaited<T> = T extends Promise<infer U> ? U : never;

type AwaitedResult = MyAwaited<ExampleType>;
