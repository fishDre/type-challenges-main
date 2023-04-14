type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}
// K 应该是联合类型, 且存在于T的类型中
