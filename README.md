# ts-deep-readonly

[![npm](https://img.shields.io/npm/v/ts-deep-readonly)](https://npm.im/ts-deep-readonly)
[![build](https://github.com/iyegoroff/ts-deep-readonly/workflows/build/badge.svg)](https://github.com/iyegoroff/ts-deep-readonly/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/ts-deep-readonly/workflows/publish/badge.svg)](https://github.com/iyegoroff/ts-deep-readonly/actions/workflows/publish.yml)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/ts-deep-readonly)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/ts-deep-readonly?label=min+gzip)](https://bundlephobia.com/package/ts-deep-readonly)
[![npm](https://img.shields.io/npm/l/ts-deep-readonly.svg?t=1495378566926)](https://www.npmjs.com/package/ts-deep-readonly)

DeepReadonly type

## Getting started

```
npm i ts-deep-readonly
```

## Description

```ts
export type DeepReadonly<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends Set<infer V>
  ? ReadonlySet<DeepReadonly<V>>
  : { readonly [P in keyof T]: DeepReadonly<T[P]> }
```
