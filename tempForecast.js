/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Creates a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

*/

const printForecast = function (arr) {
  let string = "";
  for (i = 0; i < arr.length; i++) {
    string += `${arr[i]}°C in ${i + 1} days ...`
  }
  return (`...${string}`);
}

console.log(printForecast([17, 21, 23]));
