const aNumber = 111;
const aBigInt = BigInt(aNumber);
console.log(aBigInt === 111n); // true
console.log(typeof aBigInt === 'bigint'); // true
console.log(typeof 111);// "number"
console.log(typeof 111n); // "bigint"
