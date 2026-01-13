const gridElement = document.getElementById("grid");
let number = 16;

/***********************************************/
/*  Grid element and child element parameters  */
/***********************************************/

let borderSize = 2;
let marginSize = 1;

gridElement.style.padding = `${marginSize}px`;

for(let i = 0; i < number; i++){
    const parent = document.createElement('div');
    parent.setAttribute("class", "parent");
    gridElement.appendChild(parent);

    for(let j = 0; j < number; j++){
        const box = document.createElement('div');
        let dimentions = ((gridElement.offsetWidth - (gridElement.offsetWidth - gridElement.clientWidth) - marginSize*2)) / number;

        console.log((gridElement.offsetWidth - (gridElement.offsetWidth - gridElement.clientWidth)));

        box.style.width = `${dimentions - borderSize*2 - marginSize*2}px`;
        box.style.height = `${dimentions - borderSize*2 - marginSize*2}px`;
        box.style.margin = `${marginSize}px`;
        box.style.borderWidth = `${borderSize}px`;

        box.setAttribute("class", "box");

        parent.appendChild(box);

    }
}


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