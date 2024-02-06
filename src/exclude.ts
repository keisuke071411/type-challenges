// Uに割り当て可能な型をTから除外する
type MyExclude<T, U> = T extends U ? never : T;

type ExcludeResult = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
