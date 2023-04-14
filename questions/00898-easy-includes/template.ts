import type { Equal } from '@type-challenges/utils'
type Includes<T extends readonly any[], U> = T extends [infer First, ... infer Rest] ?
  Equal<First, U> extends true ? true : Includes<Rest, U> :
  false
// 在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，
// 返回的类型要么是 `true` 要么是 `false`。

// 思路
// 首先通过结构出数组的机构, 比对第一个元素是否与U相等
// 然后递归比对后续的元素, 结束条件是没有First的
// 使用内置的Equal

export default Includes
