type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? [...Rest] : never
// 直接解构去掉最后一个元素
