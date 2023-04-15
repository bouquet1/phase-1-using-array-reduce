const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const batteries = () => batteryBatches.reduce(function(accumulator, element){
//     const totalBatteries = accumulator + element;
//     return totalBatteries
// })
// console.log(batteries);

// function batteries(arr){
//     const totalBatteries = arr.reduce(function(accumulator, element){
//         return element + accumulator;
//     });
//     return totalBatteries;
// }

// console.log(batteries(batteryBatches));


const totalBatteries = batteryBatches.reduce(function(accumulator, element){ return element + accumulator}, 0)

console.log(totalBatteries);

