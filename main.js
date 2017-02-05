var dashes = 50;
var pipes = 9;
var letter = document.getElementById("letter");
var dashesA = [];
var pipesA = [];
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

    for (var l = 0; l < dashes-5; l++) {
      pipesA.push("\u00A0");

    }
    switch (i < pipes) {
      case i === 1:
      pipesA.push("hello")
        break;
      default:

    }
    pipesA.push("|");
  }
  letter.innerHTML = dashesA.join("") + pipesA.join("") + "\n" + dashesA.join("")
}


createDashes();
createPipes();
