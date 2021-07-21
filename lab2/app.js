// function greeting the user
function greetings() {
  let greeting = alert(
    "Hi there, my name is Robert, let's get to know each other"
  );
  console.log(greeting);

  // getting the user's name
  userName = prompt("What's your name, I would love to know it?");
  console.log(userName);
  // greeting the user}
  document.write(userName);

  alert("So nice to finally met you, " + userName + "!");
}

// function gauging the user's interests
function interests() {
  alert(
    "lets play a yes or no game " +
      userName +
      "! To get to know each other better."
  );
  let sports = prompt("Do you like sports " + userName + "?");
  console.log(sports);
  if (sports === "yes") {
    favoriteSport = prompt("which is your favorite?");
    console.log(favoriteSport);
  } else {
    prompt("why not?");
  }
  let food = prompt("Do you eat steak " + userName + "?");
  console.log(food);
  if (food === "yes") {
    favoriteSteak = prompt("How do you take your steak " + userName + "?");
    console.log(favoriteSteak);
  } else {
    let preference = prompt("What do you prefer?");
    console.log(preference);
    document.write(preference);
    alert("I absolutely love " + preference);
  }
  let adidas = prompt(
    userName + " my favorite brand is Adidas, dont you just love them?"
  );
  console.log(adidas);
  if (adidas === "yes") {
    adidasPreference = prompt("Do you prefer the shoes or the clothing?");
    console.log(adidasPreference);
  } else {
    let brand = prompt("Oooh what brand do you like then?");
    alert("I cant lie, I like " + brand + " too, lowkey.");
    console.log(brand);
  }
  let videoGames = prompt("Do you like video games " + userName + "?");
  console.log(videoGames);
  if (videoGames === "yes") {
    favoriteGame = prompt("which is your favorite game?");
    console.log(favoriteGame);
  } else {
    let freeTime = prompt(
      "why not? And what do you like to do in your free time?"
    );
    console.log(freeTime);
    alert(freeTime + " is great fun, " + userName);
    document.write(freeTime);
  }
  let coding = prompt("Are you a coder " + userName + "?");
  console.log(coding);
  if (coding === "yes") {
    goal = prompt("What do you wish to achieve in this endeavor");
    console.log(goal);
  } else {
    let = job = prompt("What do you do for a living?");
    console.log(job);
    document.write(job);
  }
  alert(
    "It has been a pleasure meeting you " +
      userName +
      "! I hope with this webpage you will know more about me."
  );

  confirm("Enter?");
}
function guessMe(){



  let correctNumber = 9;

  alert(
    "I'm thinking of a number...Can you guess it? It's between 1 and 15...."
  );

  // let numberGuessed=[
  // prompt("please enter your first guess"),
  // prompt("please enter your second guess"),
  // prompt("please enter your third guess"),
  // prompt("please enter your last guess"),
  // ];

  // console.log(numberGuessed);
  let wrongNumberGuessed = true;

  while (wrongNumberGuessed) {
    numberGuessed = prompt("Guess a number");
    if (numberGuessed == correctNumber) {
       wrongNumberGuessed=false;
      alert("you are correct!");
    } else if (numberGuessed < correctNumber) {
      alert("your number is far too low...try again");
    } else {
      alert("your number is too high");
    }

    // console.log([i]);
  }
}

greetings();
interests();
guessMe();
