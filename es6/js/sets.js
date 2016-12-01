let set = new Set();

set.add('key1');
set.add('key2');
set.add('key3');

console.log([...set]);
console.log(set.size);
console.log(set.has('key1'))

set.delete('key1')

console.log([...set]);
console.log(set.has('key1'))

for (let item of mySet) {
    console.log(item);
}

set.clear();
console.log([...set]);


