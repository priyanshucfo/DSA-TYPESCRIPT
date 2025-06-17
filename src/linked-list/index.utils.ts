import traverse from "./leon/utils/traverse.ts"
import create from "./leon/utils/create.ts";

const arrayString = ["a", "b", "c"];
const arrayNumber = [1, 2, 3, 4, 5];

const linkedlistString = create.createFromArray(arrayString);
const linkedlistNumber = create.createFromArray(arrayNumber);

const linkedlist = create.createFromLength(6);

traverse.traverse(linkedlistString);

console.log("\n")

traverse.traverse(linkedlistNumber);

console.log("\n")

traverse.traverse(linkedlist);
