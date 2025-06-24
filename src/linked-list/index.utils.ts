import traverse from "./leon/utils/traverse.ts"
import create from "./leon/utils/create.ts";
import insert from "./leon/utils/insert.ts";

const arrayString = ["a", "b", "c"];
const arrayNumber = [1, 2, 3, 4, 5];

const linkedlistString = create.createFromArray(arrayString);
const linkedlistNumber = create.createFromArray(arrayNumber);

const linkedlist = create.createFromLength(6);

//Returns a new linkedlist
// const newLinkedlist = insert.insertHeadAndReturn(linkedlistNumber, 556);
// traverse.traverse(newLinkedlist);

//Updates the existing linkedlist
// insert.insertHead(linkedlistNumber, 34);
// traverse.traverse(linkedlistNumber);

// insert.insertTail(linkedlistNumber, 99);
// insert.insertTailMany(linkedlistNumber, [89, 67, 79, 77, 23]);
// traverse.traverse(linkedlistNumber);

// traverse.traverse(linkedlistNumber);
