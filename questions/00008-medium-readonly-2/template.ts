type MyReadonly2<T, K extends keyof T = keyof T>= {
  readonly [P in keyof T]: T[P]
} & Omit<T, K>

// 对T的部分属性进行readOnly, 如果没有K则所有readOnly;
// 思路 先循环T的key然后将Key与K对比, 如果相等则返回readOnly,反之返回原来的key
// 关于& --- 类型合并运算符
// 同名基础类型属性的合并, 类型不同属性返回为 never 类型
// 同名非基础类型属性的合并，类型不同属性返回合并类型
// 在类型推断后面加上等号是泛型的默认值

// 基本类型合并
interface A {
  readonly name: string
  age: number
}
interface B {
  name: string
  age: number
}

// 没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）。 即使 any 也不可以赋值给 never。
type AB = A & B
let abxs: AB = {
  name: '王',
  age: 11,
}
abxs.name = '111'
// 总结
// 标识同名不同类型的合并会产生never类型
// 后面的类型会合并前面的类型, 包括修饰符
// Type 'number' is not assignable to type 'never'.ts(2322)
type fdsaf = keyof AB
// 但是keyof还是会取到联合的key即便是never
