// 1-misol
// function sum(arg1, arg2, arg3) {
//     let max;
//     if(arg1 > arg2) {
//         max = arg1;
//     } else {
//         max = arg2;
//     } if (max < arg3) {
//         max = arg3;
//     }
//     return max;
// }

// 2-misol
// function sum(arg1, arg2) {
//     let sum = 0;
//     for(let i = arg1; i <= arg2; i++) {
//         if (i % 2 == 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// 3-misol
// function sum(arg1) {
//     let arg = arg1 % 10;
//     let arg2 = Math.trunc((arg1 % 100) / 10);
//     let arg3 = Math.trunc(arg1 % 10);
//     let sum = arg + arg2 + arg3;
//     return sum;
// }

// 4-misol
// let sum = 0;
// function juft(arg1) {
//     let arg = arg1 % 10;
//     let arg2 = Math.trunc((arg1 % 100) / 10);
//     let arg3 = Math.trunc(arg1 % 10);
//     if (arg % 2 == 0) {
//         sum += arg;
//     }
//     if (arg2 % 2 == 0) {
//         sum += arg2;
//     }
//     if (arg3 % 2 == 0) {
//         sum += arg3;
//     }
//     return sum;
// }

// 5-misol
// function son(arg){
//     let multiply = 1;
//     for (let i = 1; i <= arg; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             continue;
//         }
//         multiply *= i;
//     }
//     return multiply;
// }

// 6-misol
// function son(arg){
//     let multiply = 1;
//     for (let i = 1; i <= arg; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             break;
//         }
//     }
//     return multiply;
// }

// 7-misol
// function son(arg) {
//     let n = +prompt('Sonni kiriting !');
//     for (let i = 1; i <= n; i += 2) {
//     if (n % 2 == 1) {
//         console.log(sum);
//     }
// }
// }