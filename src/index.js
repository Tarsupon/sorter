class Sorter {
  constructor() {
    // your implementation
    this.arr=[];
    this.comparator= (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;

  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    indices.sort(this.comparator);

    let rep;

    for (let i = 0; i < indices.length; i++){
    for(let j = i; j < indices.length; j++){
      if (this.comparator(this.arr[indices[i]], this.arr[indices[j]]) > 0) {
      rep = this.arr[indices[i]];
      this.arr[indices[i]] = this.arr[indices[j]];
      this.arr[indices[j]] = rep;
      }
    }
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;

