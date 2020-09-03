let guessNumber = () => {
  let count = 0;
  count++
  let userInput = document.getElementById('getNumbers').value;
  let randomNumber = Math.floor(Math.random() * Math.floor(100)); 
  if(userInput < randomNumber) {
    document.getElementById('userNumber').innerHTML = 'guess too low';
  } else if(userInput > randomNumber) {
    document.getElementById('userNumber').innerHTML = 'guess too high';
  } else if(count > 3 && userInput > randomNumber || userInput < randomNumber) {
    document.getElementById('btn').disabled = true;
    document.getElementById('result').innerHTML = 'computer chose : ' + randomNumber;
  }
}

// || userInput < randomNumber