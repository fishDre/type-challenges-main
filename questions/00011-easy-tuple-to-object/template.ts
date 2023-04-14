type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}

const locales = [
  {
    locale: 'se',
    language: 'Swedish',
  },
  {
    locale: 'en',
    language: 'English',
  },
] as const
// 联合类型配合接口inded分别取联合类型对应字段的类型 然后返回联合类型
type Locale = typeof locales[number]['locale']
