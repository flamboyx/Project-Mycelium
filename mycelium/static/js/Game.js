const gameBoard = document.getElementById('game-board');

for (let i = 0; i < 48; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', () => {
      showRectangle();
    });
    gameBoard.appendChild(square);
  
}

function showRectangle() {
  var rectangle = document.getElementById("rectangle");

  var left = document.getElementById("left");
  var rigth = document.getElementById("rigth");
  rectangle.style.display = "block";
  left.style.display = "block";
  rigth.style.display = "block";
}


function leftScroll() {
  const left = document.querySelector(".scroll-images");
  left.scrollBy(200, 0);
}
function rightScroll() {
  const right = document.querySelector(".scroll-images");
  right.scrollBy(-200, 0);
}
