type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer X ? X : any
// 推断出函数T的返回类型
// 收获:
// 函数的返回值根据return 来生成联合类型
// 函数的返回值也可以infer来声明
