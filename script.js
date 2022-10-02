//Pobranie canvas
const canvas = document.querySelector('canvas');

//Import canvas 2d
const ctx = canvas.getContext('2d');

//Zmienne

//Wymiary canvas

//Szerokość
const cw = canvas.width = 800;
//Wysokość
const ch = canvas.height = 500;

//wymiary piłki
const ballSize = 20;

//Pozycja X paletki
const ballX = cw / 2 - ballSize / 2;
//Pozycja Y paletki
const ballY = ch / 2 - ballSize / 2;

//Wymiary paletek

//Szerokość
const paddleWidth = 20;
//Wysokość
const paddleHeight = 100;

//Odległości od konća pola gry gracza

//Pozycja X paletki
const playerX = 70;
//Pozycja Y paletki
const playerY = 200;

//Odległości od konća pola gry bota

//Pozycja X paletki
const aiX = 710;
//Pozycja Y paletki
const aiY = 200;

//Wymiary lini połowy boiska

//Szerokość
const lineWidth = 3;
//Wysokość
const lineHight = 13;


//funkcja rysująca bota
let AI = () => {
    //Kolor obiektu
    ctx.fillStyle = 'yellow';
    //Rysowanie obiektu
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight)
};

//funkcja rysująca paletkę gracza
let paddle = () => {
    //Kolor obiektu
    ctx.fillStyle = 'green';
    //Rysowanie obiektu
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
};

//funkcja rysująca piłkę
let ball = () => {
    //Kolor obiektu
    ctx.fillStyle = '#fff';
    //Rysowanie obiektu
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
};

//funkcja rysująca pole gry
let table = () => {
    //Kolor obiektu
    ctx.fillStyle = '#000';
    //Rysowanie obiektu
    ctx.fillRect(0, 0, cw, ch);

    //funkcja rysująca linie połowy boiska
    for (let linePosition = 5; linePosition < ch; linePosition += 30) {
        //Kolor obiektu
        ctx.fillStyle = "#808080";
        //Rysowanie obiektu
        ctx.fillRect(cw / 2 - linePosition / 570, linePosition, lineWidth, lineHight);
    }
};

//Wywołania funkcji
table();
ball();
paddle();
AI();