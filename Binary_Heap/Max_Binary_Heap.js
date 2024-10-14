// tsc Binary_Heap/Max_Binary_Heap
// node Binary_Heap/Max_Binary_Heap
var MaxBinaryHeap = /** @class */ (function () {
    function MaxBinaryHeap() {
        this.heapArray = [];
    }
    MaxBinaryHeap.prototype.insert = function (value) {
        this.heapArray.push(value);
        var i = this.heapArray.length - 1;
        while (i >= 0) {
            var j = Math.ceil(i / 2) - 1;
            if (this.heapArray[j] < this.heapArray[i]) {
                var temp = this.heapArray[j];
                this.heapArray[j] = this.heapArray[i];
                this.heapArray[i] = temp;
                i = j;
            }
            else
                break;
        }
        return "".concat(value, " added successfully!");
    };
    MaxBinaryHeap.prototype.traverse = function () {
        return this.heapArray;
    };
    MaxBinaryHeap.prototype.extractMax = function () {
        var maxVal;
        var minVal;
        if (this.heapArray.length === 0)
            return "Empty Binary Heap!";
        else if (this.heapArray.length === 1)
            return "Maximum Value: ".concat(this.heapArray.pop());
        else {
            maxVal = this.heapArray[0];
            minVal = this.heapArray.pop();
            if (minVal)
                this.heapArray[0] = minVal;
            var i = 0;
            var k = void 0;
            var temp = void 0;
            while (i < this.heapArray.length) {
                if (this.heapArray[2 * i + 1] > this.heapArray[2 * i + 2])
                    k = 2 * i + 1;
                else
                    k = 2 * i + 2;
                if (this.heapArray[i] < this.heapArray[k]) {
                    temp = this.heapArray[i];
                    this.heapArray[i] = this.heapArray[k];
                    this.heapArray[k] = temp;
                    i = k;
                }
                else
                    break;
            }
        }
        return "Maximum Value: ".concat(maxVal);
    };
    MaxBinaryHeap.prototype.update = function (index, value) {
        if (this.heapArray[index] > value) {
            this.heapArray[index] = value;
            var i = index;
            var k = void 0;
            var temp = void 0;
            while (i < this.heapArray.length - 1) {
                if (this.heapArray[2 * i + 1] > this.heapArray[2 * i + 2])
                    k = 2 * i + 1;
                else
                    k = 2 * i + 2;
                if (this.heapArray[i] < this.heapArray[k]) {
                    temp = this.heapArray[i];
                    this.heapArray[i] = this.heapArray[k];
                    this.heapArray[k] = temp;
                    i = k;
                }
                else
                    break;
            }
        }
        else if (this.heapArray[index] < value) {
            this.heapArray[index] = value;
            var i = index;
            var k = void 0;
            var temp = void 0;
            while (i >= 0) {
                k = Math.ceil(i / 2) - 1;
                if (this.heapArray[i] > this.heapArray[k]) {
                    temp = this.heapArray[i];
                    this.heapArray[i] = this.heapArray[k];
                    this.heapArray[k] = temp;
                    i = k;
                }
                else
                    break;
            }
        }
        return "Value: ".concat(value, " added at the index: ").concat(index);
    };
    MaxBinaryHeap.prototype.delete = function (index) {
        var minVal = this.heapArray.pop();
        if (minVal)
            this.heapArray[index] = minVal;
        var i = index;
        var k;
        var temp;
        while (i < this.heapArray.length) {
            if (this.heapArray[2 * i + 1] > this.heapArray[2 * i + 2])
                k = 2 * i + 1;
            else
                k = 2 * i + 2;
            if (this.heapArray[i] < this.heapArray[k]) {
                temp = this.heapArray[i];
                this.heapArray[i] = this.heapArray[k];
                this.heapArray[k] = temp;
                i = k;
            }
            else
                break;
        }
        return "Value at index: ".concat(index, " successfully deleted!");
    };
    return MaxBinaryHeap;
}());
var mbh = new MaxBinaryHeap();
console.log(mbh.insert(79));
console.log(mbh.insert(21));
console.log(mbh.insert(56));
console.log(mbh.insert(91));
console.log(mbh.insert(56));
console.log(mbh.insert(89));
console.log(mbh.insert(12));
console.log(mbh.insert(15));
console.log(mbh.insert(67));
console.log(mbh.insert(93));
console.log(mbh.insert(101));
console.log(mbh.insert(7));
console.log(mbh.traverse());
console.log(mbh.extractMax());
console.log(mbh.traverse());
console.log(mbh.update(2, 23));
console.log(mbh.traverse());
console.log(mbh.update(4, 93));
console.log(mbh.traverse());
console.log(mbh.delete(3));
console.log(mbh.traverse());
