//IE Digital Code Challenge 1 Pacman Simulator by Anthony Pace (2019)

/// variables x and y stated. Direction also included
var x = 0;
var y = 0;
var direction = '';

// Restart to put pacman somewhere else
function restart() {
    // Values reset
    x = '';
    y = '';
    direction = '';

    // Input values containing nothing
    document.getElementById("openingX").value = '';
    document.getElementById("openingY").value = '';

    // Movement controls hidden using block
    document.getElementById("openingScreen").style.display = "block";
    document.getElementById("gameScreen").style.display = "none";

    // resets to original text
    document.getElementById("result").innerHTML = 'Where position will be';
}

// Function called when the user clicks on place 
function start() {
    // Get inputs from text fields and set them to our x and y coordinates
    x = parseInt(document.getElementById("openingX").value);
    y = parseInt(document.getElementById("openingY").value);

    // Checks values to see if they fit inside the range 0-4
    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {

        //Drop down menu direction
        direction = document.getElementById("openingdirection").value;

        // Hides the placement inputs once its all cleared
        document.getElementById("openingScreen").style.display = "none";
        document.getElementById("gameScreen").style.display = "block";

        // Pacman location reset
        document.getElementById("result").innerHTML = x + ", " + y + ", " + direction;
    } else {
        // Incorrect value entered. Alerts the user to enter a number between 0-4
        alert("Location doesn't exist. Enter a number from 0-4");
    }
}

// Current destination is at. Ability to turn right using the function
function right() {

    // Check direction and update accordingly
    if (direction.toUpperCase() === "NORTH") {
        direction = 'East';
    }
    else if (direction.toUpperCase() === "WEST") {
        direction = 'North';
    }
    else if (direction.toUpperCase() === "SOUTH") {
        direction = 'West';
    }
    else if (direction.toUpperCase() === "EAST") {
        direction = 'South';
    }

    // Current direction of pacman
    document.getElementById("result").innerHTML = x + ", " + y + ", " + direction;
}

// Current destination is at. Ability to turn left using the function

function left() {

    // Updates user with pacmans location
    if (direction.toUpperCase() === "NORTH") {
        direction = 'West';
    }
    else if (direction.toUpperCase() === "WEST") {
        direction = 'South';
    }
    else if (direction.toUpperCase() === "SOUTH") {
        direction = 'East';
    }
    else if (direction.toUpperCase() === "EAST") {
        direction = 'North';
    }

    // result Pacmans location to the screen each time a move is made
    document.getElementById("result").innerHTML = x + ", " + y + ", " + direction;
}
// Current location of where pacman is by using function move
function move() {
    // X and Y move with location
    if (direction.toUpperCase() === "NORTH") {
        y += 1;
    }
    else if (direction.toUpperCase() === "WEST") {
        x -= 1;
    }
    else if (direction.toUpperCase() === "SOUTH") {
        y -= 1;
    }
    else if (direction.toUpperCase() === "EAST") {
        x += 1;
    }

    // Seeing if there is any incorrect values where it shouldn't be
    try {
        if (x < 0) throw x = 0;
        if (x > 4) throw x = 4;
        if (y < 0) throw y = 0;
        if (y > 4) throw y = 4;
    }
    catch(e) {
        // Alerting user to move to a different position as its closed off
        alert("Can't go there. Move to a different position");
    }

    // Pacmans location
    document.getElementById("result").innerHTML = x + ", " + y + ", " + direction;
}