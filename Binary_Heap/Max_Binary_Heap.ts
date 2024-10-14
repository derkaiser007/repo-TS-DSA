// tsc Binary_Heap/Max_Binary_Heap
// node Binary_Heap/Max_Binary_Heap

class MaxBinaryHeap<V>{
    private heapArray: V[] = []

    insert(value: V): string{
        this.heapArray.push(value)
        let i: number = this.heapArray.length-1
        while(i >= 0){
            let j: number = Math.ceil(i / 2) - 1
            if(this.heapArray[j] < this.heapArray[i]){
                let temp: V = this.heapArray[j]
                this.heapArray[j] = this.heapArray[i]
                this.heapArray[i] = temp
                i = j
            }
            else break;
        }
        return `${value} added successfully!`
    }

    traverse(): V[]{
        return this.heapArray;
    }

    extractMax(): string{
        let maxVal: V;
        let minVal: V | undefined;
        if(this.heapArray.length === 0) return `Empty Binary Heap!`;
        else if(this.heapArray.length === 1) return `Maximum Value: ${this.heapArray.pop()}`;
        else{
            maxVal = this.heapArray[0]
            minVal = this.heapArray.pop()
            if(minVal) this.heapArray[0] = minVal;
            let i: number = 0
            let k: number;
            let temp: V;
            while(i < this.heapArray.length){
                if(this.heapArray[2*i+1] > this.heapArray[2*i+2]) k = 2*i+1;
                else k = 2*i+2;
                
                if(this.heapArray[i] < this.heapArray[k]){
                    temp = this.heapArray[i]
                    this.heapArray[i] = this.heapArray[k]
                    this.heapArray[k] = temp
                    i = k
                }
                else break;
            }
        }
        return `Maximum Value: ${maxVal}`
    }

    update(index: number, value: V): string{
        if(this.heapArray[index] > value){
            this.heapArray[index] = value
            let i: number = index
            let k: number;
            let temp: V;
            while(i < this.heapArray.length-1){
                if(this.heapArray[2*i+1] > this.heapArray[2*i+2]) k = 2*i+1;
                else k = 2*i+2;

                if(this.heapArray[i] < this.heapArray[k]){
                    temp = this.heapArray[i]
                    this.heapArray[i] = this.heapArray[k]
                    this.heapArray[k] = temp
                    i = k
                }
                else break;
            }
        }
        else if(this.heapArray[index] < value){
            this.heapArray[index] = value
            let i: number = index
            let k: number;
            let temp: V;
            while(i >= 0){
                k = Math.ceil(i / 2) - 1
                if(this.heapArray[i] > this.heapArray[k]){
                    temp = this.heapArray[i]
                    this.heapArray[i] = this.heapArray[k]
                    this.heapArray[k] = temp
                    i = k
                }
                else break
            }
        }
        return `Value: ${value} added at the index: ${index}`;
    }
    
    delete(index: number): string{
        let minVal: V | undefined = this.heapArray.pop()
        if(minVal) this.heapArray[index] = minVal;
        let i: number = index
        let k: number;
        let temp: V;
        while(i < this.heapArray.length){
            if(this.heapArray[2*i+1] > this.heapArray[2*i+2]) k = 2*i+1;
                else k = 2*i+2;

            if(this.heapArray[i] < this.heapArray[k]){
                temp = this.heapArray[i]
                this.heapArray[i] = this.heapArray[k]
                this.heapArray[k] = temp
                i = k
            }
            else break;            
        }
        return `Value at index: ${index} successfully deleted!`;
    }
}

let mbh = new MaxBinaryHeap<number>()
console.log(mbh.insert(79))
console.log(mbh.insert(21))
console.log(mbh.insert(56))
console.log(mbh.insert(91))
console.log(mbh.insert(56))
console.log(mbh.insert(89))
console.log(mbh.insert(12))
console.log(mbh.insert(15))
console.log(mbh.insert(67))
console.log(mbh.insert(93))
console.log(mbh.insert(101))
console.log(mbh.insert(7))
console.log(mbh.traverse())
console.log(mbh.extractMax())
console.log(mbh.traverse())
console.log(mbh.update(2, 23))
console.log(mbh.traverse())
console.log(mbh.update(4, 93))
console.log(mbh.traverse())
console.log(mbh.delete(3))
console.log(mbh.traverse())