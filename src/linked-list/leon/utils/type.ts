export type TNode<T> = {
  data: T,
  next: TNode<T> | null,
}
