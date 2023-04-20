type Chainable<T extends object = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>>
  get(): T
}

// <>里面仅仅约束不要里面写判断
// never可以用来去除对象里面的键

/// / All primitive types
// type Primitive = string
// | boolean | number
// | bigint | symbol
// | null | undefined

// All non-primitive types
// type NonPrimitive = object

// 所有的非原始类型就是object
