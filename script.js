// Requsito 4
let pixelBoard = document.querySelector('#pixel-board');
for (let index = 1; index <= 5; index += 1) {
    let linha = document.createElement('div');
    pixelBoard.appendChild(linha);
    linha.className = 'linha';
    for (let index2 = 1; index2 <= 5; index2 += 1) {
        let pixel = document.createElement('div');
        linha.appendChild(pixel);
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
    }
}

// Requisito 6
let initialColor = document.querySelector('#black');
initialColor.classList.add('selected');

// Requisito 7
// let colors = document.querySelectorAll('.color');
// for (index = 0; index < colors.length; index += 1) {
//     colors[index].addEventListener('click', selectColor);
// }
// function selectColor(event) {
//     for (index = 0; index < colors.length; index += 1) {
//         colors[index].classList.remove('selected');
//     }
//     event.target.classList.add('selected');
// }

// Requisito 8
// let pixels = document.querySelectorAll('.pixel');
// for (index = 0; index < pixels.length; index += 1) {
//     pixels[index].addEventListener('click', changePixelColor);
// }
// function changePixelColor(event) {
//     let newColor = document.querySelector('.selected');
//     event.target.style.backgroundColor = newColor.id;
// }

// Requisito 9
let button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);
function clearBoard() {
    let pixels = document.querySelectorAll('.pixel');
    for (index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
    }
}

// Requisitos 10 e 11
let dimensionsInput = document.querySelector('#board-size');
let button2 = document.querySelector('#generate-board');
button2.addEventListener('click', generateBoard);
function generateBoard() {
    let linhas = document.querySelectorAll('.linha');
    for (index = 0; index < linhas.length; index += 1) {
        linhas[index].remove();
    }
    if (dimensionsInput.value === '') {
        window.alert('Board inválido!');
    } else if (dimensionsInput.value < 5) {
        var boardDimensions = 5;
    } else if (dimensionsInput.value > 44) {
        var boardDimensions = 44;
    } else {
        var boardDimensions = dimensionsInput.value;
    }
    for (let index = 1; index <= boardDimensions; index += 1) {
        let linha = document.createElement('div');
        pixelBoard.appendChild(linha);
        linha.className = 'linha';
        for (let index2 = 1; index2 <= boardDimensions; index2 += 1) {
            let pixel = document.createElement('div');
            linha.appendChild(pixel);
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
        }
    }
    paint();
}

// Requisito 12
let palette = document.querySelector('#color-palette');
for (index = 1; index <= 20; index += 1) {
    let paletteColor = document.createElement('div');
    palette.appendChild(paletteColor);
    paletteColor.className = 'color';
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    paletteColor.id = 'rgb(' + JSON.stringify(red) + ', ' + JSON.stringify(green) + ', ' + JSON.stringify(blue) + ')';
    paletteColor.style.backgroundColor = 'rgb(' + JSON.stringify(red) + ', ' + JSON.stringify(green) + ', ' + JSON.stringify(blue) + ')';
}

function paint() {
    let colors = document.querySelectorAll('.color');
    for (index = 0; index < colors.length; index += 1) {
        colors[index].addEventListener('click', selectColor);
    }
    function selectColor(event) {
        for (index = 0; index < colors.length; index += 1) {
            colors[index].classList.remove('selected');
        }
        event.target.classList.add('selected');
    }
    let pixels = document.querySelectorAll('.pixel');
    for (index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', changePixelColor);
    }
    function changePixelColor(event) {
        let newColor = document.querySelector('.selected');
        event.target.style.backgroundColor = newColor.id;
    }
}
paint();