console.log('[arthur] flappy bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvass = document.querySelector('canvas');
const context = canvass.getContext('2d');

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50
};

function loop(){
    context.drawImage(
        sprites,
        flappyBird.spriteX, flappyBird.spriteY,
        flappyBird.largura, flappyBird.altura,
        flappyBird.x, flappyBird.y,
        flappyBird.largura, flappyBird.altura,
    );
    requestAnimationFrame(loop);
}

loop();
