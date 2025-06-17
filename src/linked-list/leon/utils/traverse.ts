import { TNode } from "./type";

function traverse<T>(head: TNode<T>) {
  let current: TNode<T> | null;
  for (current = head; current !== null; current = current.next) {
    console.log(current.data);
  }
}

export default {
  traverse,
}