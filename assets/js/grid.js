/**
 * @type {HTMLSelectElement}
 */
const squareCellsSelect = document.querySelector("[name='square-cells']");
const btnPlay = document.querySelector("#btn-play");

/**
 * @type {HTMLElement}
 */
const gridContainer = document.querySelector(".grid-container");

btnPlay.addEventListener("click", onBtnClick);

function onBtnClick() {

    const squareCells = parseInt(squareCellsSelect.value);

    console.log("valore scelto", squareCells);

    const gridList = createGrid(squareCells);

    console.log(gridList);

    printGrid(gridContainer, gridList);

}

