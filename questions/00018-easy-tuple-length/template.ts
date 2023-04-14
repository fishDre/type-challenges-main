type Length<T extends readonly any[]> = T['length']

// 总结
// 1 []代表一个空数组类型 any[]代表里面可以是任意类型的数组类型, 两者本来就是不一样的类型
// 2 js世界的代码 经过 as const 断言后 会加上readonly的 , 所以记得加上对应的只读约束

// tuple类型 就是一个确定长度 确定类型的数组

type tuple = [string, number, string] // 特点,固定长度了
let arr: tuple = ['你好', 11, '佛挡杀佛']
type length = tuple['length'] /// 可以取到长度
type tuple1 = (string | number)[]
type length1 = tuple1['length'] /// 取不到长度,只有一个number类型
let arr1: tuple1 = ['你好', 11, '佛挡']

// 所以总结tuple类型和 普通的数组类型的取长度区别

// as const 的作用, 加上后可以配合 typeof 原本会生成普通类型数组, 会变成只读的tuple类型的数组
