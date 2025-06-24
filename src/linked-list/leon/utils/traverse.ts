import { TNode } from "./type";
import process from "node:process"

function traverse<T>(head: TNode<T>) {
  let current: TNode<T> | null;
  let linkedList = "";
  for (current = head; current !== null; current = current.next) {
    linkedList += `${current.data} -> `
  }
  linkedList += "null"
  console.log(linkedList);
}

export default {
  traverse,
}