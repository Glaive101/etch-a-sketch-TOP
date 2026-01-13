/********************/
/*  Variable setup  */
/********************/

let number = 16; //default

let borderSize = 0;  //Individual box element formating
let marginSize = 0;

const gridElement = document.getElementById("grid");
const resetButton = document.querySelector("#reset-button");

//Dynamic padding adjustment
gridElement.style.padding = `${marginSize}px`;

/********************/
/*     functions    */
/********************/

function resetButtonEvent() {
    let validInput = false;

    while(validInput !== true){
        number = parseInt(prompt("Please enter a value between 0 and 100 to determine gridsize", "50"));
        if (number < 0 || number > 100) continue;

        validInput = true;
        gridElement.innerHTML = '';

        generateGrid(number);
        break;
    }
}

function generateGrid(input){
    //Individual box element dimention calculations
    let dimentions = (
                (
                    gridElement.offsetWidth - 
                    (gridElement.offsetWidth - gridElement.clientWidth) - 
                    marginSize*2
                )
            ) / input;

    let finalDimentions = dimentions - borderSize*2 - marginSize*2;

    //Generate Grid
    for(let i = 0; i < input; i++){
        const parent = document.createElement('div');
        parent.setAttribute("class", "parent");
        gridElement.appendChild(parent);

        for(let j = 0; j < number; j++){
            const box = document.createElement('div');
            
            box.style.width = `${finalDimentions}px`;
            box.style.height = `${finalDimentions}px`;
            box.style.margin = `${marginSize}px`;
            box.style.borderWidth = `${borderSize}px`;

            box.setAttribute("class", "box");

            box.addEventListener("mouseover", () => mouseElementColistionEvent(box));

            parent.appendChild(box);
        }
    }
}

function mouseElementColistionEvent(element) {
    if(element.style.backgroundColor !== '') return;

    let colour = getColourGoldenRation();
    element.style.backgroundColor = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
}

/******************************************************************/
/*  Fancy colour generating algorithm from Martin Leitner-Ankerl  */
/******************************************************************/

function getColourGoldenRation(){
    goldenRatioConjugate = 0.618033988749895;

    let h = Math.random();

    h += goldenRatioConjugate;
    h %= 1;
    return hsvToRgb(h, 0.85, 0.85);
}

function hsvToRgb(h, s, v) {
    let r, g, b = 0;
    let h_i = Math.trunc(h * 6);
    let f = h * 6 - h_i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    if(h_i === 0) [r, g, b] = [v, t, p];
    if(h_i === 1) [r, g, b] = [q, v, p];
    if(h_i === 2) [r, g, b] = [p, v, t];
    if(h_i === 3) [r, g, b] = [p, q, v];
    if(h_i === 4) [r, g, b] = [t, p, v];
    if(h_i === 5) [r, g, b] = [v, p, q];

    //console.log([Math.trunc(r * 256), Math.trunc(g * 256), Math.trunc(b * 256)]);

    return [Math.trunc(r * 256), Math.trunc(g * 256), Math.trunc(b * 256)];
}

//reset button setup
resetButton.addEventListener("click", () => resetButtonEvent());

generateGrid(number); //Generate default setup


/*********************************************/
/*     Naive colour generating method        */
/*********************************************/

// function getRandomColour(){
//     let characters = '0123456789ABCDEF';
//     let colour = '#';
//     for(let i = 0; i < 6; i++){
//         colour += characters[Math.floor(Math.random() * 16)];
//     }

//     return colour;
// }

/*********************************************/
/*  Non-functional percentage based spacing  */
/*********************************************/

// const gridElement = document.getElementById("grid");
// let number = 16;
// let percentage = 100 / number;

// for(let i = 0; i < number; i++){
//     const parent = document.createElement('div');
//     //let parentHeight = ((gridElement.offsetWidth - (gridElement.offsetWidth - gridElement.clientWidth))) / number;
    
//     parent.style.height = `${percentage}%`;
//     parent.style.width = `100%`;
    
//     parent.setAttribute("class", "parent");
//     gridElement.appendChild(parent);

//     for(let j = 0; j < number; j++){
//         const box = document.createElement('div');
//         //let dimentions = 

//         box.style.width = `${percentage}%`;
//         box.style.height = '100%';
//         box.setAttribute("class", "box");

//         parent.appendChild(box);

//     }
// }


/*********************************/
/*  Full wrapping implementation */
/*********************************/

//let numberOfBoxes = number ** 2;

// for(let i = 0; i < numberOfBoxes; i++){
//     const box = document.createElement('div')

//     let dimentions = ((gridElement.offsetWidth - (gridElement.offsetWidth - gridElement.clientWidth))) / number;
//     console.log("Single box w+h: " + dimentions);

//     box.style.width = `${dimentions - borderSize*2 - marginSize*2}px`;
//     box.style.height = `${dimentions - borderSize*2 - marginSize*2}px`;
//     box.style.margin = `${marginSize}px`;

//     box.style.border = `${borderSize}px solid black`;

//     gridElement.appendChild(box);
// }