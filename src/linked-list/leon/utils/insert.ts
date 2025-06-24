import type { TNode } from "type";
import traverse from "./traverse.ts";
/*
Inserting at head
Inserting at tail
Inserting after a node
Inserting before a node
*/

function insertHeadAndReturn<T>(head: TNode<T>, data: T) {
  const newElement = {
    data: data,
    next: head,
  };
  head = newElement;
  return head;
}

function insertHead<T>(head: TNode<T>, data: T) {
  const newElement = {
    data: head.data,
    next: head.next,
  };
  head.data = data;
  head.next = newElement;
}

function insertTail<T>(head: TNode<T>, data: T) {
  let nodeAtTail: TNode<T> | null = null;
  let current: TNode<T>;

  for (current = head; current.next !== null; current = current.next) {
    nodeAtTail = current.next;
  }

  let newElement: TNode<T> | null = {
    data: data,
    next: null,
  };

  if (nodeAtTail) {
    nodeAtTail.next = newElement;
  }
}

function insertManyHead<T>(head: TNode<T>, array: T[]) {
  const newElement = {
    data: head.data,
    next: head.next,
  };
  head.next = newElement;

  head.data = array[0];

  let firstListElement: TNode<T> = {
    data: array[1],
    next: null,
  };
  let headArray: TNode<T> = firstListElement;
  let tailArray: TNode<T> = firstListElement;
  let newElementArray: TNode<T>;
  for (let i = 2; i < array.length; i++) {
    newElementArray = {
      data: array[i],
      next: null,
    };
    tailArray.next = newElementArray;
    tailArray = newElementArray;
  }
  tailArray.next = head.next;
  head.next = headArray;
}

function insertTailMany<T>(head: TNode<T>, array: T[]) {
  let nodeAtTail: TNode<T> | null = null;
  let current: TNode<T>;

  for (current = head; current.next !== null; current = current.next) {
    nodeAtTail = current.next;
  }

  let arrayElement = {
    data: array[0],
    next: null,
  }
  let headArray: TNode<T> = arrayElement;
  let tailArray: TNode<T> = arrayElement;
  let newElementArray: TNode<T>;

  for(let i = 1; i < array.length; i++) {
    newElementArray = {
      data: array[i],
      next: null,
    }
    tailArray.next = newElementArray
    tailArray = newElementArray;
  }

  if(nodeAtTail) {
    nodeAtTail.next = headArray;
  }
}

export default {
  insertHeadAndReturn,
  insertHead,
  insertManyHead,
  insertTail,
  insertTailMany,
};
