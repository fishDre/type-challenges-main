type MyExclude<T, U> = T extends U ? never : T
// 联合类型变了
type a = {
  'aaa': string
  'aa1a': string
}
type un = 'string'|'number'
type un1 = 'string' extends un ? un : never
// 问题点 怎么遍历联合类型
// 数组[number]
// 对象 [p in keyof T]

// 考察联合类型的分发, 第一泛型 第二条件语句
