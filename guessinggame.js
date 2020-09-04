let guessNumber = () => {
  let count = document.getElementById('increaseOne').innerHTML;
  count++;
  document.getElementById('increaseOne').innerHTML = count;
  let userInput = document.getElementById('getNumbers').value;
  let randomNumber = Math.floor(Math.random() * Math.floor(100)); 
  console.log(randomNumber);
  if(count === 3 && randomNumber < userInput ) {
    document.getElementById('btn').disabled = true;
    document.getElementById('result').innerHTML = 'computer chose : ' + randomNumber;
    document.getElementById('userNumber').innerHTML = 'guess too high';

  } else if(count === 3 && randomNumber > userInput) {
    document.getElementById('userNumber').innerHTML = 'guess too low';
    document.getElementById('btn').disabled = true;
    document.getElementById('result').innerHTML = 'computer chose : ' + randomNumber;

  } else if(randomNumber < userInput) {
    document.getElementById('userNumber').innerHTML = 'guess too high';

  } else if(randomNumber > userInput) {
    document.getElementById('userNumber').innerHTML = 'guess too low';

  } else if (randomNumber === userInput) {
    document.getElementById('userNumber').innerHTML = 'you are correct';
  }
}



