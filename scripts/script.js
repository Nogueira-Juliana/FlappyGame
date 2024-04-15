const sprites = new Image();
sprites.src = './sprites/sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


// já que iremos movimentar os desenhos, 
//criaremos objs com as 
//propriedades para q elas sejam modificadas a medida que
//queiramos

//flappybird
const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 20,
    larguraBird: 38,
    alturaBird: 10,
    desenhar() {
        contexto.drawImage(
            sprites,//arquivo com imagens
            flappyBird.spriteX, flappyBird.spriteY, // coordenadas x e y
            flappyBird.largura, flappyBird.altura,//tamanho w e h
            flappyBird.x, flappyBird.y,//posicionamento dentro do canvas
            flappyBird.larguraBird, flappyBird.alturaBird//tamanho dentro do canvas
        );
    }
}

//chão
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 30,
    larguraChao: 300,
    alturaChao: 30,
    desenhar() {
        contexto.drawImage(
            sprites,//arquivo com imagens
            chao.spriteX, chao.spriteY, // coordenadas x e y
            chao.largura, chao.altura,//tamanho w e h
            chao.x, chao.y,//posicionamento dentro do canvas
            chao.larguraChao, chao.alturaChao//tamanho dentro do canvas
        );
    }
}

//plano de fundo
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 80,
    larguraFundo: 300,
    alturaFundo: 120,
    desenhar() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height);

        contexto.drawImage(
            sprites,//arquivo com imagens
            planoDeFundo.spriteX, planoDeFundo.spriteY, // coordenadas x e y
            planoDeFundo.largura, planoDeFundo.altura,//tamanho w e h
            planoDeFundo.x, planoDeFundo.y,//posicionamento dentro do canvas
            planoDeFundo.larguraFundo, planoDeFundo.alturaFundo//tamanho dentro do canvas
        );
    }
}

//função que desenha infinitas vezes o quadro na tela
function loop() {
    planoDeFundo.desenhar();
    chao.desenhar();
    flappyBird.desenhar();

    requestAnimationFrame(loop);
}

loop();