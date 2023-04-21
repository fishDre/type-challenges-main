// type Last<T extends any[]> = T extends [infer First, ...infer Rest] ? T[Rest['length']] : never
type Last<T extends any[]> = [any, ...T][T['length']]
// 使用解构获取length-1因为在ts中无法执行减一的操作
// 给原始数组加上一个元素来达到我们的目标数组
// [...infer First, infer Rest]同样是合理的
