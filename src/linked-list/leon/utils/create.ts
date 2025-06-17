import type { TNode } from "./type";

function createFromArray<T>(array: T[]) {
  let element: TNode<T> = {
    data: array[0],
    next: null,
  }
  let head: TNode<T> = element;
  let tail: TNode<T> = element;
  let newElement: TNode<T>;
  for(let i = 1; i < array.length; i++) {
    newElement = {
      data: array[i],
      next: null,
    }
    tail.next = newElement;
    tail = newElement;
  }
  return head;
}

function createFromLength(length: number) {
  let element: TNode<number> = {
    data: 0,
    next: null,
  }
  let head: TNode<number> = element;
  let tail: TNode<number> = element;
  let newElement: TNode<number>;
  for(let i = 1; i < length; i++) {
    newElement = {
      data: i,
      next: null,
    }
    tail.next = newElement;
    tail = newElement;
  }
  return head;
}

export default {
  createFromArray,
  createFromLength,
}