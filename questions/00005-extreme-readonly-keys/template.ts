type GetReadonlyKeys<T> = keyof {
  // [P in keyof T as ]
}

// 怎么返回接口只读类型的并集呢
