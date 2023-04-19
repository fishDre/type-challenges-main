// type TupleToUnion<T extends any[]> = keyof {
//   [P in T[number]]: P
// }
type TupleToUnion<T extends unknown[]> = T[number]
type A4 = [1, 2, 3, true]

type A3 = { [P in keyof A4]: A4[P] }
// 考察对数组索引签名的理解
