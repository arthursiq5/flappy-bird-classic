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
    y: 50,
    desenha(){
        context.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura,
        );
    }
};

function loop(){
    flappyBird.desenha();

    requestAnimationFrame(loop);
}

loop();
