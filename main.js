const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
const newArr = [];
const currentSums = (array) =>{
    array.reduce((previous, current) => {
        let sum = previous + current;
        newArr.push(previous);
        return sum;
    },);
    console.log(newArr);
} 
currentSums(numbers);
