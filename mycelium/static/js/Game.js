const gameBoard = document.getElementById('game-board');
var centerX;
var centerY;

class Field {
  constructor() {
    for (let i = 0; i < 48; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      this.squares = document.getElementsByClassName('square');
      square.addEventListener('click', () => this.selectMush(this.squares[i]));
      gameBoard.appendChild(square);
    }
    this.is_building = false;
  }

  showField() {
    var F = document.getElementById("game-board");
    if(!this.is_building) {
      this.is_building = true;
      F.style.display = "flex";
    } else {
      this.is_building = false;
      F.style.display = "none";
    }
  }
    
  selectMush(square) {
    showRectangle();
    var shroom = document.getElementsByClassName('child');
    for(var i = 0; i < shroom.length; i++) {
      shroom[i].addEventListener('click', this.placeMush.bind(this, i + 1, square));
    }
  }

  placeMush(i, square) {
    var img=document.createElement('img');
    img.className = 'img';
    var src = "../../static/imgGame/Mushrooms/mush" + i + ".png";
    img.src=src;
    if(!square.hasChildNodes()) {
      square.appendChild(img);
    }
  }  
}

var field = new Field;

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
  field.showField();
});

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

