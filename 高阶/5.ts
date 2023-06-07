// 差集 A-B = Exclude
export type SetDifference<A, B> = A extends B ? never : A
type A = string | number
type B = number | boolean
type AB = SetDifference<A, B>
// type AB = string

// Omit 忽略 = Exclude + Pick

// keyof T = name|age|visible
// K = age
// SetDifference<keyof T, K> => name|visible
// {name: string;visible: boolean;}
type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>

type Props = {
  name: string,
  age: number,
  visible: boolean
}
type OmitAgeProps = Omit<Props, 'age'>

// Diff 差异
namespace na {
  type Props = {
    name: string,
    age: number,
    visible: boolean
  }
  type DefaultProps = {
    age: number
  }
  type Diff<T extends object, K extends object> = Pick<T, SetDifference<keyof T, keyof K>>
  type DiffProps = Diff<Props, DefaultProps>
  // type DiffProps = {
  //   name: string;
  //   visible: boolean;
  // }
}

// InterSection 交叉属性
namespace nb {
  type Props = {
    name: string,
    age: number,
    visible: boolean
  }
  type DefaultProps = {
    age: number
  }
  type InterSection<T extends object, K extends object> = Pick<T, Extract<keyof T, keyof K> & Extract<keyof K, keyof T>>
  type DuplicateProps = InterSection<Props, DefaultProps>
}

// Overwrite 重写，覆盖同一属性
namespace nc {
  type OldProps = {
    name: string,
    age: number,
    visible: boolean
  }
  type NewProps = {
    age: string,
    other: string
  }
  type Diff<T extends object, K extends object> = Pick<T, SetDifference<keyof T, keyof K>>
  type InterSection<T extends object, K extends object> = Pick<T, Extract<keyof T, keyof K> & Extract<keyof K, keyof T>>
  type Overwrite<T extends object, U extends object, I = Diff<T, U> & InterSection<U, T>> = Pick<I, keyof I>
  type ReplacedProps = Overwrite<OldProps, NewProps>
  // {name: string;age: string;visible: boolean;}
}

// Merage = Compute + Omit<U, T> 合并
namespace nd {
  type O1 = {
    id: number,
    name: string
  }
  type O2 = {
    id: number,
    age: number
  }
  type Computed<A extends any> = A extends Function ? A : { [K in keyof A]: A[K] }
  type R1 = Computed<{ x: 'x' } & { y: 'y' }>
  // type R1 = {
  //   x: 'x';
  //   y: 'y';
  // }
  type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>
  type Merage<O1 extends object, O2 extends object> = Computed<O1 & Omit<O2, keyof O1>>
  type R2 = Merage<O1, O2>
  // type R2 = {
  //   id: number;
  //   name: string;
  //   age: number;
  // }
}