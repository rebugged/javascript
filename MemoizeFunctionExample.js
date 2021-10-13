const memoize = (callback) => {
    const cache = {};

    return (...args) => {
        let stringifiedArgs = JSON.stringify(args);
        const result = cache[stringifiedArgs] || callback(...args);
        cache[stringifiedArgs] = result;
        return result;
    };
};

const add = (x, y) => x+y;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(add(1, 2));