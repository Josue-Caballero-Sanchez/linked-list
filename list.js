export class LinkedList{
    constructor(){
        this.head = null;
    }

    append(value){
        if(this.head === null){
            this.head = new Node(value);
        }
        else{
            let temp = this.head
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
    }

    prepend(value){
        if(this.head === null){
            this.head = new Node(value);
        }
        else{
            let node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
    }

    size(){
        if(this.head === null){
            return 0;
        }

        let count = 1;
        let temp = this.head;
        while(temp.next !== null){
            count++;
            temp = temp.next;
        }

        return count;
    }

    getHead(){
        if(this.head === null){
            return null;
        }

        return this.head;
    }

    getTail(){
        if(this.head === null){
            return null;
        }

        let temp = this.head;
        while(temp.next !== null){
            temp = temp.next;
        }

        return temp;
    }

    get(index){
        if(index === 0){
            return this.head;
        }

        let temp = this.head;
        while(temp.next !== null && index > 0){
            temp = temp.next;
            index--;
        }

        if(index != 0){
            return "Error";
        }
        else{
            return temp;
        }
    }

    pop(){
        if(this.head === null){
            return;
        }

        if(this.head.next === null){
            this.head = null;
        }

        else{
            let temp = this.head;
            while(temp.next.next !== null){
                temp = temp.next;
            }
            temp.next = null;
        }
    }

    contains(value){
        if(this.head === null){
            return false;
        }

        let temp = this.head;

        while(temp.next !== null){
            if(temp.value === value){
                return true;
            }
            temp = temp.next;
        }

        if(temp.value === value){
            return true;
        }

        return false;
    }

    findIndexOf(value){
        if(this.head === null){
            return null;
        }

        let index = 0;
        let temp = this.head;
        while(temp.next !== null){
            if(temp.value === value){
                return index;
            }
            temp = temp.next;
            index++;
        }

        if(temp.value === value){
            return index;
        }

        return null;
    }

    toString() {
        if (this.head === null) {
            return ""; // Empty list
        }

        let current = this.head;
        let result = "";
        while (current) {
            result += current.value;
            current = current.next;
            if (current) {
                result += " -> "; 
            }
        }
        return result;
    }

    insertAt(value, index){
        if(this.head === null && index > 0){
            return "Error";
        }

        if(index < 0){
            return "Error";
        }

        if(this.head === null && index === 0){
            this.head = new Node(value);
            return;
        }

        if(this.head !== null){
            let count = 1;
            let temp = this.head;
            while(temp.next !== null){
                count++;
                temp = temp.next;
            }

            if(index > count){
                return "error";
            }

            if(index === 0){
                let node = new Node(value);
                node.next = this.head;
                this.head = node;
                return;
            }

            let marker = 0;
            let tempNode = this.head;
            while(tempNode.next !== null && marker < index-1){
                marker++;
                tempNode = tempNode.next;
            }

            let node = new Node(value);
            node.next = tempNode.next;
            tempNode.next = node;

        }

    }

    removeAt(index){
        if(this.head === null || index < 0){
            return "Error";
        }

        if(this.head !== null){
            let count = 1;
            let temp = this.head;
            while(temp.next !== null){
                count++;
                temp = temp.next;
            }

            if(index >= count){
                return "error";
            }

            if(index === 0){
                this.head = this.head.next;
                return;
            }

            let marker = 0;
            let tempNode = this.head;
            while(tempNode.next !== null && marker < index-1){
                marker++;
                tempNode = tempNode.next;
            }

            tempNode.next = tempNode.next.next;

        }

    }

    testLinkedList() {
        console.log("Testing LinkedList methods:");

        // Append
        this.append("apple");
        this.append("banana");
        this.append("cherry");
        console.log("After append:", this.toString()); // Expected: apple -> banana -> cherry

        // Prepend
        this.prepend("date");
        console.log("After prepend:", this.toString()); // Expected: date -> apple -> banana -> cherry

        // Size
        console.log("Size:", this.size()); // Expected: 4

        // Get Head and Tail
        console.log("Head:", this.getHead().value); // Expected: date
        console.log("Tail:", this.getTail().value); // Expected: cherry

        // Get element at index
        console.log("Element at index 1:", this.get(1).value); // Expected: apple

        // Pop (remove last)
        this.pop();
        console.log("After pop:", this.toString()); // Expected: date -> apple -> banana

        // Contains
        console.log("Contains 'banana':", this.contains("banana")); // Expected: true
        console.log("Contains 'cherry':", this.contains("cherry")); // Expected: false

        // Find Index Of
        console.log("Index of 'apple':", this.findIndexOf("apple")); // Expected: 1

        // Insert At
        this.insertAt("elderberry", 2);
        console.log("After insertAt:", this.toString()); // Expected: date -> apple -> elderberry -> banana

        // Remove At
        this.removeAt(1); 
        console.log("After removeAt:", this.toString()); // Expected: date -> elderberry -> banana
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
