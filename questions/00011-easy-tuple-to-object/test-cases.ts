import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

type a = typeof tuple
type b = a[number]
// 这里讨论typeof的作用, 为什么会加上type

type myTypeDemo = {
  title: string
}
interface myTypeDemo1 {
  title: string
}
type propType = Record<string, string>
// 这两种写法等效
// interface propType  {
//   [key: string]: string
// }
let props: propType

// type声明的已知的索引签名
const data: myTypeDemo = { title: '订单页面' }
// interface由于声明合并类型签名是不确定的
const data1: myTypeDemo1 = { title: '订单页面' }
// props = data1
// Type 'myTypeDemo1' is not assignable to type 'propType'.
//   Index signature for type 'string' is missing in type 'myTypeDemo1'.ts(232
