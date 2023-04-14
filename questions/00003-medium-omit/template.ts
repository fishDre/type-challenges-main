type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
// 这个跟Pick是相反的, 省略一些类型, 也可以说删除一些类型, 实际应该很容易用到
// 总结 : 关键怎么去掉一个类型
// 1: K extends string | number | symbol 这里代表的是接口key的类型 我感觉keyof出来的是一样的
// 2: Exclude<T,U> 从T中排除U,从而构造新的类型, 前提是联合类型(里面设计泛型联合条件分发)
// 3: 关键是使用Exclude去排除T中的K类型, 前提他们都是联合类型, 然后得到可以遍历的目标类型, 然后返回目标类型
// 4: 对比一下Omit和Exclude的区别Omit的泛型参数是接口和联合类型, 而Exclude的参数是联合类型
// 5: 更多解法, 使用Pick的反向思维
// type Pick<T,Exclude<keyof T,K>>
