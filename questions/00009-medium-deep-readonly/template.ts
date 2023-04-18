type DeepReadonly<T> = any

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
