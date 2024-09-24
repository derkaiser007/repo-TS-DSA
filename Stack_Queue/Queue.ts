// tsc Stack_Queue/Queue
// node Stack_Queue/Queue

class QueueNode<V> {
    value: V
    next: QueueNode<V> | null = null

    constructor(value: V) {
        this.value = value
        this.next = null
    }
}

class Queue<V> {
    private front: QueueNode<V> | null = null
    private rear: QueueNode<V> | null = null
    private size: number = 0

    enqueue(value: V): string {
        const newQueueNode = new QueueNode(value)
        if(!this.front) this.front = this.rear = newQueueNode
        else {
            if(this.rear) {
                this.rear.next = newQueueNode
                this.rear = newQueueNode 
            }
        }
        this.size++
        return `${value} added successfully!.`
    }

    dequeue(): string {
        const value = this.front?.value
        if(!this.front && !this.rear) return `Empty Queue!`;
        else if(this.front === this.rear) {
            this.front = this.rear = null
        } else {
            if(this.front?.next) this.front = this.front?.next
        }
        this.size--
        return `${value} removed successfully!`
    }

    frontElement(): V | string {
        if(!this.front) return `Empty Queue!`;
        return `${this.front.value}`
    }

    isEmpty(): string {
        if(this.size === 0) return `Queue Empty!`;
        return`Queue isn't empty!`
    }

    queueSize(): number {
        return this.size
    }
}

const queue = new Queue<string | number | boolean>()
console.log(queue.isEmpty())
console.log(queue.queueSize())
console.log(queue.enqueue(true))
console.log(queue.queueSize())
console.log(queue.enqueue("niraj"))
console.log(queue.queueSize())
console.log(queue.enqueue(786))
console.log(queue.queueSize())
console.log(queue.enqueue(456))
console.log(queue.queueSize())
console.log(queue.isEmpty())
console.log(queue.frontElement())
console.log(queue.dequeue())
console.log(queue.queueSize())
console.log(queue.frontElement())
console.log(queue.dequeue())
console.log(queue.queueSize())
console.log(queue.frontElement())
console.log(queue.dequeue())
console.log(queue.queueSize())
console.log(queue.frontElement())
console.log(queue.dequeue())
console.log(queue.queueSize())
console.log(queue.frontElement())
console.log(queue.dequeue())
console.log(queue.queueSize())
console.log(queue.isEmpty())