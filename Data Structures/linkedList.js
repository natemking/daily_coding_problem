class LinkedList {
    constructor() {
        this.head = null,
        this.length = 0
    }

    insertAtHead(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }
    
    getByIndex(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    insertAtIndex(index, value) {
        if (index < 0 || index > this.length) console.log('Error: index out of range!');

        if (index === 0) return this.insertAtHead(value);
         
        const prev = this.getByIndex(index - 1);
        if( prev == null) return null;

        prev.next = new LinkedListNode(value, prev.next);
        this.length++;
    }
    
    removeAtIndex(index) {
        if (index < 0 || index > this.length) console.log('Error: index out of range!');

        if (index === 0) return this.removeHead();
         
        const prev = this.getByIndex(index - 1);
        if( prev.next === null) return null;
    
        prev.next = prev.next.next;
        this.length--;
    }

    print() {
        let output = '';
        let current = this.head;

        while (current) {
            output += `${current.value} -> `;
            current = current.next;
        }
        console.log(`${output} null `);
    }
 
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value,
        this.next = next
    }
}

LinkedList.fromValues = (...values) => {
    const ll = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertAtHead(values[i]) 
    }
    return ll
}

const ll = LinkedList.fromValues(10, 20, 30, 40, 50)

const test = ll.getByIndex(5)
console.log(test);


ll.print();
ll.removeAtIndex(5);
ll.print()