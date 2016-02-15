var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);
alert ('Hello '+ userName + ' lets see how well you know Adrienne. '+ 'Please answer Y or N to the following questions');

var correctAnswers = 0;

var pTagOne = document.getElementById('ans-one');

function question1 (){
  var answer1 = prompt('Was Adrienne born in California?')
  .toUpperCase(); if (answer1 === 'Y') {
    //alert('Good job!');
    pTagOne.textContent = 'Good job!';
    console.log (userName + ' answered '+ answer1);
    correctAnswers++;
  } else if (answer1=== 'N') {
    //alert ('Sorry, she was, indeed, born in California');
    pTagOne.textContent = 'Sorry, she was, indeed, born in California';
    console.log (userName + ' answered ' + answer1);
  }else {
    alert ('Please follow directions by answering Y or N');
  }
}
question1();

var pTagTwo = document.getElementById('ans-two');

function question2 (){
  var answer2 = prompt('Is Adrienne over 100 years old?').toUpperCase();
  if (answer2 === 'Y') {
    // alert ('You must be crazy.');
    pTagTwo.textContent = 'You must be crazy.';
    console.log(userName + ' answered ' +answer2);
  } else if (answer2 === 'N') {
    // alert ('Correct. She is 24');
    pTagTwo.textContent =
    console.log(userName +' answered '+ answer2);
    correctAnswers++;
  }else {
    alert ('Please make sure you are following directions by answering Y or N');
  }
}
question2();

var pTagThree = document.getElementById('ans-three');

function question3() {
  parseInt(correctAnswer3= correctAnswer2)
  var answer3 = prompt('Did Adrienne attend an University of Washington?') .toUpperCase();
  if (answer3 === 'Y') {
    // alert ('Heck no, GO COUGS');
    pTagThree.textContent = 'Did Adrienne attend an University of Washington?';
    console.log(userName + ' answered '+ answer3);
  } else if (answer3 === 'N') {
    // alert ('Correct!');
    pTagThree.textContent = 'Correct!';
    console.log(userName+' answered '+answer3);
    correctAnswers++;
  }else {
    alert ('Please follow directions by answering Y or N');
  }
}
question2();

var pTagFour = document.getElementById('ans-four');

function question4() {
  var answer4 =prompt ('Has Adrienne been working as a coder for 10 years?') .toUpperCase();
  if (answer4 === 'Y') {
    // alert('No, silly');
    pTagFour.textContent = 'No, silly';
    console.log(userName +' answered '+answer4)
  } else if (answer4 === 'N') {
    // alert ('You are correct');
    pTagFour.textContent = 'You are correct';
    console.log(userName+ ' answered '+answer4);
    correctAnswers++;
  }else {
    alert ('Please follow directions by answering Y or N');
  }
}
question4();

var pTagFive = document.getElementById('ans-five');

function question5() {
  var answer5 = prompt('Does Adrienne currently want to pursue Ruby on Rails?') .toUpperCase();
  if (answer5 === 'Y') {
    // alert ('Not as of now, but maybe in the future');
    pTagFive.textContent = 'Not as of now, but maybe in the future'
    console.log(userName + ' answered '+ answer5);
  } else if (answer5 === 'N') {
    // alert ('Correct! She wants to learn JavaScript');
    pTagFive.textContent = 'Correct! She wants to learn JavaScript';
    console.log(userName+ ' answered '+answer5);
    correctAnswers++;
  }else {
    alert ('Please follow directions by answering Y or N');
  }
}
question5();

var pTagSix = document.getElementById('ans-six');

function question6() {
  var wrongAnswer = 0;
  while (guessAge !== 24 && wrongAnswer < 4){
    var guessAge = parseInt (prompt('How old is Adrienne?'));
    console.log( userName + ' guessed ' + guessAge);
    if (guessAge === 24) {
      // alert ('You are right');
      pTagSix.textContent = 'You are right';
      correctAnswers++;
    } else if (guessAge < 24) {
      // alert ('Higher');
      pTagSix.textContent = 'Higher';
      wrongAnswer++;
      alert('you have gotten this wrong'+ wrongAnswer + ' times.');
    } else if (guessAge > 24) {
      // alert ('Lower');
      pTagSix.textContent = 'Lower';
      wrongAnswer++;
      alert('you have gotten this wrong '+ wrongAnswer + ' times.');
    }
      else {
      // alert ('WTF this should not ever happen')
      pTagOne.textContent = 'WTF this should not ever happen';
      wrongAnswer++;
      alert('you have gotten this wrong'+ wrongAnswer + ' times.');
    }
  }
}
question6();

var pTagSeven = document.getElementById('ans-seven');

function question7() {
  var pets = ['Ally', 'Duke', 'Smokey', 'Jasmine'];
  var passPet = false;

  while(passPet === false) {
    var petAnswer = prompt('Can you name one of my pets?');
    for (var i = 0; i < pets.length; i++) {
      console.log ( userName + ' guessed ' + petAnswer);
      if (petAnswer === pets[i]) {
        passPet = true;
        // alert ('YES!')
        pTagSeven.textContent = 'YES!';
        correctAnswers++;
      }
      if (passPet === false) {
        // alert ('BooHoo')
        pTagSeven.textContent = 'BooHoo';
      }
    }
  }
}
question7();


alert('you got '+ correctAnswers + ' correct!')
