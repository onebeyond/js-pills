const method1 = (list1, list2) => list1.concat(list2); // new array

const method2 = (list1, list2) => {
  list1.push.apply(list1, list2); // returns length
  return list1; // mutated!
};

const method3 = (list1, list2) => {
  list1.push(...list2);
  return list1;
};

const method4 = (list1, list2) => [...list1, ...list2];

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log('Method 1:');
console.log(method1(array1, array2));
console.log(`Non mutated! [ ${array1} ]`);

console.log('\nMethod 2:');
console.log(method2(array1, array2));
console.log(`Array 1 has been mutated! [ ${array1} ]`); // mutated!

console.log('\nMethod 3:');
console.log(method3([1, 2, 3], array2)); // new instance on the fly for array1

console.log('\nMethod 4:');
const newArray1 = [1, 2, 3];
console.log(method4(newArray1, array2));
console.log(`Non mutated! [ ${newArray1} ]`);
