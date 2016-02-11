var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);
alert ('Hello '+ userName + ' lets see how well you know Adrienne. '+ 'Please answer Y or N to the following questions');

var answer1 = prompt('Was Adrienne born in California?').toUpperCase();
if (answer1 === 'Y') {
  alert('Good job!');
  console.log (userName + ' answered '+ answer1);
} else if (answer1=== 'N') {
  alert ('Sorry, she was, indeed, born in California');
  console.log (userName + ' answered ' + answer1);
}else {
  alert ('Please follow directions');
}

var answer2 = prompt('Is Adrienne over 100 years old?').toUpperCase();
if (answer2 === 'Y') {
  alert ('You must be crazy.');
  console.log(userName + ' answered ' +answer2);
} else if (answer2 === 'N') {
  alert ('Correct. She is 24');
  console.log(userName +' answered '+ answer2);
}else {
  alert ('Please make sure you are following directions');
}

var answer3 = prompt('Did Adrienne attend an University of Washington?') .toUpperCase();
if (answer3 === 'Y') {
  alert ('Heck no, GO COUGS');
  console.log(userName + ' answered '+ answer3);
} else if (answer3 === 'N') {
  alert ('Correct!');
}
console.log(userName+' answered '+answer3);

var answer4 =prompt ('Has Adrienne been working as a coder for 10 years?') .toUpperCase();
if (answer4 === 'Y') {
  alert('No, silly');
  console.log(userName +' answered '+answer4)
} else if (answer4 === 'N') {
  alert ('You are correct');
  console.log(userName+ ' answered '+answer4)
}

var answer5 = prompt('Does Adrienne currently want to pursue Ruby on Rails?') .toUpperCase();
if (answer5 === 'Y') {
  alert ('Not as of now, but maybe in the future');
  console.log(userName + ' answered '+ answer5);
} else if (answer5 === 'N') {
  alert ('Correct! She wants to learn JavaScript');
}
console.log(userName+ ' answered '+answer5);

var wrongAnswer = 0;
while (guessAge !== 24 && wrongAnswer < 4){
  var guessAge = parseInt (prompt('How old is Adrienne?'));
  console.log( userName + ' guessed ' + guessAge);
  if (guessAge === 24) {
    alert ('You are right');
  } else if (guessAge < 24) {
    alert ('Higher');
    wrongAnswer++;
    alert('you have gotten this wrong'+ wrongAnswer + ' times.');
  } else if (guessAge > 24) {
    alert ('Lower');
    wrongAnswer++;
    alert('you have gotten this wrong'+ wrongAnswer + ' times.');
  }
    else {
    alert ('WTF this should not ever happen')
    wrongAnswer++;
    alert('you have gotten this wrong'+ wrongAnswer + ' times.');
  }
};

var pets = ['Ally', 'Duke', 'Smokey', 'Jasmine'];
var petAnswer = prompt('Can you name one of my pets?');
var passPet = false
for (var i = 0; i < pets.length; i++) {
  console.log (petAnswer);
  if (petAnswer === pets[i]) {
    passPet = true;
    alert ('YES!')
  }
  else {
    prompt('Can you name one of my pets?');
    alert ('BooHoo')
  }
  if (passPet = true) {
    break; }
}
