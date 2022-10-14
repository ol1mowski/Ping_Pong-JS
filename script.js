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
let ballX = cw / 2 - ballSize / 2;
//Pozycja Y paletki
let ballY = ch / 2 - ballSize / 2;

//Prędkość piłki

let ballSpeedX = 5;
let ballSpeedY = 5;

//Wymiary paletek

//Szerokość
const paddleWidth = 20;
//Wysokość
const paddleHeight = 100;

//Odległości od konća pola gry gracza

//Pozycja X paletki
const playerX = 70;
//Pozycja Y paletki
let playerY = 200;

//Odległości od konća pola gry bota

//Pozycja X paletki
const aiX = 710;
//Pozycja Y paletki
let aiY = 200;

//Wymiary lini połowy boiska

//Szerokość
const lineWidth = 3;
//Wysokość
const lineHight = 13;

//Poruszanie się AI
let aiPosition = () => {
    //Zmienne przechowujące środek paletki AI i piłki
    const middlePaddel = aiY + paddleHeight / 2 ;
    const middleBall = ballY + ballSize / 2;
    
    if (ballX > 500) {
        if (middlePaddel - middleBall > 200) {
            aiY -= 24;
        } else if (middlePaddel - middleBall > 50) {
            aiY -= 10;
        }
        else if (middlePaddel - middleBall < -200) {
            aiY += 24;
      } else if (middlePaddel - middleBall < -50) {
            aiY += 10;
      }
    }
    if (ballX <= 500 && ballX > 100) {
      if (middlePaddel - middleBall > 100) {
        aiY -= 3;
      } 
        if (middlePaddel - middleBall < -100) {
        aiY += 3;
      }
    }
//Sprawdzenie czy pozycja AI nie wychodzi za pole canvas
    if (aiY >= ch - paddleHeight) {
        aiY = ch - paddleHeight
    }

    if (aiY <= 0) {
        aiY = 0;
    }
};
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


//Sprawdza pozycję myszy i kontroluje czy paletka nie wyszła poza canvas
let playerPosition = (event) => {
    let topCanvas = canvas.offsetTop;
    playerY = event.clientY - topCanvas - paddleHeight / 2; //żeby była myszka na środku
      //gdy próbuje wyjachać rakietka na dole poza canvas
    if (playerY >= ch - paddleHeight) {
        playerY = ch - paddleHeight
    }
      //gdy próbuje wyjachać rakietka na górze poza canvas
    if (playerY <= 0) {
        playerY = 0;
    }
    };   

canvas.addEventListener('mousemove', playerPosition);

//funkcja obsługująca przyśpieszanie piłki
let speedUp = () => {
    //sprawdza czy piłka odije się od krawędzi i zwiększy bądz zmniejszy o 0.4
    if (ballSpeedX > 0 && ballSpeedX <= 16) {
        ballSpeedX += .4;
    } 
    
    else if (ballSpeedX < 0 && ballSpeedX >= -16) {
        ballSpeedX -= .4
    }

    if (ballSpeedY > 0 && ballSpeedY <= 16) {
        ballSpeedY += .4;
    }
    
    else if (ballSpeedY < 0 && ballSpeedY >= -16) {
        ballSpeedY -= .4
    }
};

//funkcja rysująca piłkę
let ball = () => {
    //Kolor obiektu
    ctx.fillStyle = '#fff';
    //Rysowanie obiektu
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
    //animacja
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    //Obsługa odbicia piłki oraz dodanie prędkości
    if (ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
        speedUp();
    }

    if (ballX + ballSize >= cw) {
        ballX = cw / 2 - ballSize / 2;
        ballY = ch / 2 - ballSize / 2;
        ballSpeedX = 5;
        ballSpeedY = 5;
        if (ballX > 0) {
            console.log('AI')
        } else {
            console.log('PLAyRE')
        }
    } 
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
let game = () => {
    table();
    ball();
    paddle();
    AI();
    aiPosition();
};

setInterval(game, 1000 / 60);   