//  iterator example

const arr = [1,2,3,4,5];
const iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());    
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); // { value: undefined, done: true }


// generator example

function* gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next()); // { value: undefined, done: true }