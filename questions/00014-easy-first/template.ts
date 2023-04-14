// 1.三元表达式解法
// type First<T extends any[]> =  T extends [] ? never : T[0]

// 2.使用indexed
// type First<T extends any[]> =  T['length'] extends 0 ? never : T[0]

// 遍历数组类型
type age1 = [1, 2, 'string']
type t1 = age1[number]

// js世界
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
]
// ts世界 [number] 取数组里面的类型然后返回类型
type Person = typeof MyArray[number]

// 空数组使用number会返回一个never
//
type demo = [][number]
type demo1<T extends any[] > = T[0]
type demo12 = demo1<[1]>

// 3. 使用[number]遍历数组类型
// type First<T extends any[]> =  T[number] extends never ? never : T[0]
// type First<T extends any[]> =  T[0] extends T[number] ? T[0] : never;

// 4. 使用infer来解构
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
