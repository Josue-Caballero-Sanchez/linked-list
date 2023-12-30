import { LinkedList } from "./list.js";

const list = new LinkedList();

list.append("test");
list.append("test2")
list.prepend("test3");
list.append("test4");

console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);
console.log(list.head.next.next.next.value);

list.removeAt(4);
console.log(list.toString());
