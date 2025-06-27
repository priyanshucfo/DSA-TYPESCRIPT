//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

//Passed 1566 / 1569
//Time Complexity - O(n + m)
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
  let firstNum = 0;
  let secondNum = 0;

  let place = 1;
  for (let l1Head = l1; l1Head !== null; l1Head = l1Head.next) {
    firstNum += l1Head.val * place;
    place *= 10;
  }

  place = 1;
  for (let l2Head = l2; l2Head !== null; l2Head = l2Head.next) {
    secondNum += l2Head.val * place;
    place *= 10;
  }
  let total = firstNum + secondNum;

  let lastNum = total % 10;
  total = Math.trunc(total / 10);

  let l3: ListNode = {
    val: lastNum,
    next: null,
  };

  let l3Head = l3;
  let l3Tail = l3;

  while (total > 0) {
    let lastNum = total % 10;
    total = Math.trunc(total / 10);
    const newElement = {
      val: lastNum,
      next: null,
    };
    l3Tail.next = newElement;
    l3Tail = newElement;
  }

  return l3Head;
}

//Passed
function AddTwoNumber(l1: ListNode | null, l2: ListNode | null) {
  while (l1 || l2) {
    
  }
}

let l1third = new ListNode(9, null);
let l1second = new ListNode(4, l1third);
let l1first = new ListNode(2, l1second);

let l2fourth = new ListNode(9, null)
let l2third = new ListNode(4, l2fourth);
let l2second = new ListNode(6, l2third);
let l2first = new ListNode(5, l2second);

console.dir(addTwoNumbers(l1first, l2first), {
  depth: 99
});
