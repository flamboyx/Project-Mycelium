const gameBoard = document.getElementById('game-board');
var centerX;
var centerY;

for (let i = 0; i < 48; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', () => {
      const top = getSquareCoordinatesT(square);
      const left = getSquareCoordinatesL(square);
      showRectangle();
      console.log(top);
      console.log(left);
      
      var shroom = document.getElementsByClassName('child');
                for(var y = 0; y < shroom.length; y++){
                  shroom[i].addEventListener("click", () => {
                  var otherElement = document.getElementById("WOW");
                  otherElement.style.display = "flex";
                  otherElement.style.left = left + "px";
                  otherElement.style.top = top + "px";           
                  });
              }
    });
    gameBoard.appendChild(square);
}

function getSquareCoordinatesT(square) {
  const rect = square.getBoundingClientRect();
  const top =rect.top;
  return top;
}

function getSquareCoordinatesL(square) {
  const rect = square.getBoundingClientRect();
  const left =rect.left;
  return left;
}

const but = document.getElementById('build');
but.addEventListener('click', () => {
  showField();
});

function showField() {
  var F = document.getElementById("game-board");
  F.style.display = "flex";
 
}
const cl = document.getElementById('esc');
cl.addEventListener('click', () => {
  HideRectangle();
});

function showRectangle() {
  var rectangle = document.getElementById("rectangle");
  rectangle.style.display = "block";
}

function HideRectangle() {
  var rectangle = document.getElementById("rectangle");
  rectangle.style.display = "none";
}


/////


///////


var waterAmount = 0;
var sporeAmount = 0;

// Функция для обновления количества валюты
function updateCurrency(currency, amount) {
  if (amount >= 0) {
    document.getElementById(currency + "-amount").textContent = amount;
  }
}

// Пример обновления количества валюты
waterAmount += 10;
updateCurrency("water", waterAmount);

sporeAmount += 5;
updateCurrency("spore", sporeAmount);

//////


var ll = document.getElementById('menu');
function CH1() {
 ll.style.backgroundImage = 
  "url('../../static/imgGame/UserIcon/Red.png')";
}
function CH2() {
  ll.style.backgroundImage = 
  "url('../../static/imgGame/UserIcon/DarkBlue.png')"; 
}

function CH3() {
  ll.style.backgroundImage = 
  "url('../../static/imgGame/UserIcon/Green.png')";
}

function CH4() {
  ll.style.backgroundImage = 
  "url('../../static/imgGame/UserIcon/Orange.png')";
}

function CH5() {
  ll.style.backgroundImage = 
  "url('../../static/imgGame/UserIcon/Black.png')";
}

function CH6() {
  ll.style.backgroundImage = 
  "url('../../static/imgGame/UserIcon/Violet.png')";
}

