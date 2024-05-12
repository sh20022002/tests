class PrioityQueue{
    constructor() {
        this.queue = [];
    }
    enqueue(node, distance) {
        this.queue.push({ node, distance});
        this.sort();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        }
        return null;
    }

    sort() {
        this.queue.sort((a, b) => a.distance - b.distance);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
   
}