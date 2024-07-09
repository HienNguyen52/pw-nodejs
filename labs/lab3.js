//lab 3.1
let myNumArray1 = [1, 2, 3, 4, 5];
let evenNumCount = 0;
let oddNumCount = 0;
for (let index = 0; index < myNumArray1.length; index++) {
    if  (myNumArray1[index] % 2 == 0) {
       evenNumCount = evenNumCount + 1;
    } else {
        oddNumCount = oddNumCount + 1;
    };
};
console.log(`Even Numbers : ${evenNumCount}`);
console.log(`Odd Numbers : ${oddNumCount}`);

// Lab 3.2 (maximum number)
let myNumArray2 = [1, 2, 3, 4, 5];
let maximum = myNumArray2[0];
for (let index = 0; index < myNumArray2.length; index++) {
    if (myNumArray2[index] > maximum) {
        maximum = myNumArray2[index]};
    };
console.log(`Maximum : ${maximum}`);

// Lab 3.2 (minimum number)
let myNumArray4 = [1, 2, 3, 4, 5];
let  minimum = myNumArray4[0];
for (index = 0; index < myNumArray4.length; index++){
    if (myNumArray4[index] < minimum) {
        minimum = myNumArray4[index];
    };
};
console.log(`Minimum : ${minimum}`);



// Lab 3.3
let myNumArray3 = [12, 34, 1, 16, 28]

