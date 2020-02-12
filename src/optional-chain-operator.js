const object = {
  arr: [1,2,3]
};

console.log(object?.arr?.length); // 3
console.log(object?.array?.length); // undefined
