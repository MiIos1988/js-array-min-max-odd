function calculateArray(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const oddCount = arr.filter(num => num % 2 !== 0).length;

    console.log(`Minimum: ${min}`);
    console.log(`Maximum: ${max}`);
    console.log(`Number of odd numbers: ${oddCount}`);
}

const arr = [1, 2, 3, 4, 5];
calculateArray(arr);