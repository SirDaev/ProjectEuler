let firstNum = 1,
    secondNum = 2,
    fibonacciNums = [],
    fibonacciEvenNums = [];

const n = 4000000;
      reducer = (accumulator, currentValue) => accumulator + currentValue;

    fibonacciNums.push(firstNum);

      while (secondNum < n) {
          fibonacciNums.push(secondNum);
          tempNum = secondNum;
          secondNum += firstNum;
          firstNum = tempNum;
      }

      for(i=0; i<fibonacciNums.length; i++) {
          if (fibonacciNums[i] % 2 == 0) {
            fibonacciEvenNums.push(fibonacciNums[i]);
          }
      }

console.log(fibonacciNums);
console.log(fibonacciEvenNums);
console.log(fibonacciEvenNums.reduce(reducer));