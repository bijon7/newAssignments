//Takes average scores of two teams, each of which  
//competes three times in a particular event as part 
//of a competition. A team only wins if its average 
//score is double of the other team. Otherwise, there 
//is no winner
const calcAverage = (firstScore, secondScore, thirdScore) => {
  return (firstScore + secondScore + thirdScore) / 3;

}