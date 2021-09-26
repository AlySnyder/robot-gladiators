
//the window object isn't actually part of the JavaScript language. 
// We can use it because browsers have built this functionality into their software and put it behind the name window. 
//This is called a web application programming interface (API)

var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);

// this creates a function named "fight"
function fight(){
    window.alert("The fight has begun!");

}

//fight()
// this is outside the bracket and will apply to all functions , we called the function fight.