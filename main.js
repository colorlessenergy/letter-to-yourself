var dashes = 19;
var pipes = 9;
var letter = document.getElementById("letter");
var dashesA = [];
var pipesA = [];
var pipesB = [];
function createDashes () {
  for (var i = 0; i < dashes; i++) {
    if (i === 0) {
      dashesA.push("+");
    }
    dashesA.push("-");
    if (i === dashes-1) {
      dashesA.push("+");
    }
  }
}

function createPipes () {
  for (var i = 0; i < pipes; i++) {
    pipesA.push("\n")
    pipesA.push("|");
  }
  for (var j = 0; j < pipes; j++) {
    pipesB.push("|");
  }
  letter.innerHTML = dashesA.join("")+ pipesB.join("")  + pipesA.join("") + "\n" + dashesA.join("") 
}


createDashes();
createPipes();
