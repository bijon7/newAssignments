/*Takes average scores of two teams, each of which competes three times in a particular event as part of a competition. A team only wins if its average 
score is double of the other team. Otherwise, there 
is no winner
*/


//Defines function to calculate average score.
const calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / 3;

}

// Values added for both teams for calculating average
//score.
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);


//Calculates winner between two values based on the fact if one value is at least twice
//the the other value.  
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= (2 * avgKoalas)) {
    console.log("Dolphins win!");
  }
  else if (avgKoalas >= (2 * avgDolphins)) {
    console.log("Koalas win!")
  }
  else { console.log("No team wins...") }
};
checkWinner(scoreDolphins, scoreKoalas);
