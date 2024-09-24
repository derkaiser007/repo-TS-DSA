// tsc Stack_Queue/Stack
// node Stack_Queue/Stack

class StackNode<V> {
    value: V
    next: StackNode<V> | null = null

    constructor(value: V) {
        this.value = value
        this.next = null
    }
}

class Stack<V> {
    private top: StackNode<V> | null = null
    private size: number = 0 
    
    push(value: V): string {
        const newStackNode = new StackNode(value)
        if(!this.top) this.top = newStackNode;
        else {
            newStackNode.next = this.top
            this.top = newStackNode
        }
        this.size++
        return `${value} added successfully`
    }

    pop(): string {
        const value = this.top?.value
        if(!this.top) return "Empty Stack!"
        else {
            if(!this.top.next) this.top = null;
            else this.top = this.top.next;
        }
        this.size--
        return `${value} removed successfully!`
    }

    peek(): any {
        if(!this.top) return "Empty Stack!";
        else return this.top.value;
    }

    isEmpty(): any {
        if(!this.top) return "Empty Stack!";
        else return "Stack isn't empty!"
    }

    stackSize(): number {
        return this.size
    }
}

const stack = new Stack<number | string | boolean>()
console.log(stack.isEmpty())
console.log(stack.push(true))
console.log(stack.stackSize())
console.log(stack.push(34))
console.log(stack.stackSize())
console.log(stack.push("niraj"))
console.log(stack.stackSize())
console.log(stack.push(false))
console.log(stack.stackSize())
console.log(stack.push(786))
console.log(stack.stackSize())
console.log(stack.isEmpty())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.stackSize())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.stackSize())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.stackSize())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.stackSize())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.stackSize())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.stackSize())
console.log(stack.isEmpty())
