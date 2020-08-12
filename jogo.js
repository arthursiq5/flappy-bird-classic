console.log('[arthur] flappy bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvass = document.querySelector('canvas');
const context = canvass.getContext('2d');

context.drawImage(
    sprites,
    0, 0, // sprite x / sprite y
    33, 24, // tamanho do sprite original
    10, 50,
    33, 24 // tamanho do sprite (renderizado)
);
