type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends string | number | boolean | Function ? T[P] : DeepReadonly<T[P]>
}
type DeepReadonly110<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? 1 : DeepReadonly110<T[P]>
}
let afsakf: keyof number extends never ? true : false

// 不明白为啥可以这样判断, 对于基本类型keyof返回了很多联合类型, 为啥还是可以对比never
type Hmm<T> = keyof T extends never ? true : false
type X1 = Hmm<{ a: string }> // false, "a" is a known key
type X2 = Hmm<{}> // true, there are no known keys
type X3 = Hmm<object> // true, there are no known keys
type X4 = Hmm<string> // false, there are keys like "toUpperCase", 返回饿这些类型本身就是readOnly
type X5 = Hmm<
  { a: string } | { b: string }
> // true, unions with no common keys have no known keys
// 怎么判断类型是一个接口/数组/其他
// 使用keyof判断
// keyof除开支持接口和类之外, 还支持基本数据类型,结果是基本数据类型的方法等联合类型
// 首先js的实现方式
let targetObjddd = {
  a: '1',
  b: '2',
  c: {
    b: '1',
    d: '2',
    f: {
      g: '8',
    },
  },
}

function handleReadonly(obj) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    Object.keys(obj).forEach((item) => {
      let key = item
      if (Object.prototype.toString.call(obj) === '[object Object]') {
        handleReadonly(item)
      }
      else {
        Object.defineProperties(obj, {
          [key]: {
            writable: false,
          },
        })
      }
    })
  }
}
handleReadonly(targetObjddd)
targetObjddd.a = '放'
