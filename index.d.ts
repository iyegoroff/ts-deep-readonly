export type DeepReadonly<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends Set<infer V>
  ? ReadonlySet<DeepReadonly<V>>
  : { readonly [P in keyof T]: DeepReadonly<T[P]> }
