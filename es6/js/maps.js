let map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(...map);

map.delete('key1');

console.log(...map);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let [key, value] of map.entries()) {
    console.log(key, value);
}

for (let [key, value] of map) {
    console.log(key, value);
}

console.log(map[Symbol.iterator] === map.entries); //true