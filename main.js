var dashes = 50;
var pipes = 10;
var spacesFromRight = 20;
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

    for (var l = 0; l < dashes-spacesFromRight; l++) {
      pipesA.push("\u00A0");

    }
    switch (i < pipes) {
      case i === 0:
      for (var k = 0; k < spacesFromRight - 4; k++) {
        pipesA.push("\u00A0")
      }
      pipesA.push("####");
      break;
      case i === 1:
      for (var k = 0; k < spacesFromRight - 4; k++) {
        pipesA.push("\u00A0")
      }
      pipesA.push("####")
      break;
      case i === 2:
      for (var k = 0; k < spacesFromRight - 4; k++) {
        pipesA.push("\u00A0")
      }
      pipesA.push("####")
      break;
      case i === 6:
      pipesA.push("Brian Munoz");
      for (var h = 0; h < 9; h++) {
        pipesA.push("\u00A0");
      }
      break;
      case i === 7:
      pipesA.push("is a web developer");
      pipesA.push("\u00A0");
      pipesA.push("\u00A0");
      break;
      case i === 8:
      pipesA.push("Long Beach, CA 90802");
      break;
      default:
      for (var j = 0; j < spacesFromRight; j++) {
        pipesA.push("\u00A0");
      }
      break;
    }
    pipesA.push("|");
  }
  letter.innerHTML = dashesA.join("") + pipesA.join("") + "\n" + dashesA.join("")
}


createDashes();
createPipes();
